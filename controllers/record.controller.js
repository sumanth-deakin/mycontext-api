const Record = require("../models/record.model");
const Request = require("request");
const User = require("../models/user.model");

exports.addRecord = function(req, res) {
  const userId = req.body.userId;

  const new_record = new Record(req.body.data);

  new_record
    .save()
    .then(result => {
      var medicalRecord = {
        $class: "com.mycontext.MedicalRecord",
        medicalRecordId: result._id,
        owner: "resource:com.mycontext.Owner#" + userId
      };

      Request.post(
        {
          headers: { "content-type": "application/json" },
          url: "http://40.87.43.191:3000/api/com.mycontext.MedicalRecord",
          body: JSON.stringify(medicalRecord)
        },
        (error, response, body) => {
          if (error) {
            new_record.remove();

            res.json({
              success: false,
              message: "Failed to save medical record."
            });
          }

          res.json({
            success: true,
            message: "Medical record added successfully."
          });
        }
      );
    })
    .catch(error => {
      res.json({
        success: false,
        message: "Failed to save medical record."
      });
    });
};

exports.updateRecord = function(req, res) {
  const id = req.body.data._id;

  Record.findOneAndUpdate({ _id: req.body.data._id }, req.body.data)
    .then(result => {
      res.json({
        success: true,
        message: "Medical record updated successfully."
      });
    })
    .catch(error => {
      res.json({
        success: false,
        message: "Failed to update medical record."
      });
    });
};

exports.listRecords = function(req, res) {
  const from = req.body.from;
  const size = req.body.size;

  Record.find({}, [
    "name",
    "cs_tumor_size",
    "year_of_birth",
    "gender",
    "year_of_birth",
    "price"
  ])
    .skip(from)
    .limit(size)
    .then(result => {
      res.json({
        success: true,
        data: result,
        message: "Medical records fetched successfully."
      });
    })
    .catch(error => {
      res.json({
        success: false,
        message: "Unable to fetch medical records."
      });
    });
};

exports.listOwnerRecords = function(req, res) {
  const from = req.body.from;
  const size = req.body.size;
  const userId = req.body.userId;

  const filter =
    "%7B%22where%22%3A%7B%22owner%22%3A%20%22resource%3Acom.mycontext.Owner%23" +
    userId +
    "%22%7D%7D";

  Request(
    "http://40.87.43.191:3000/api/com.mycontext.MedicalRecord?filter=" + filter,
    function(error, response, body) {
      const records = JSON.parse(body);
      const ids = [];

      records.map(record => {
        ids.push(record.medicalRecordId);
      });

      Record.find(
        {
          _id: { $in: ids }
        },
        [
          "name",
          "cs_tumor_size",
          "year_of_birth",
          "gender",
          "year_of_birth",
          "price"
        ]
      )
        .skip(from)
        .limit(size)
        .then(result => {
          res.json({
            success: true,
            data: result,
            message: "Owner medical records fetched successfully."
          });
        })
        .catch(error => {
          res.json({
            success: false,
            message: "Unable to fetch medical records."
          });
        });
    }
  );
};

exports.viewRecord = function(req, res) {
  const id = req.body.id;

  Record.findById(id)
    .then(result => {
      res.json({
        success: true,
        data: result,
        message: "Medical record fetched successfully."
      });
    })
    .catch(error => {
      res.json({
        success: false,
        message: "Unable to fetch medical records."
      });
    });
};

exports.changeOwnership = function(req, res) {
  const medicalrecordId = req.body.medicalrecordId;
  const newOwnerEmail = req.body.newOwnerMail;

  User.findOne({
    email: newOwnerEmail
  })
    .then(user => {
      if (user != null) {
        const ownership = {
          $class: "com.mycontext.ChangeMedicalRecordOwner",
          medicalRecord:
            "resource:com.mycontext.MedicalRecord#" + medicalrecordId,
          newOwner: "resource:com.mycontext.Owner#" + user._id
        };

        Request.post(
          {
            headers: { "content-type": "application/json" },
            url:
              "http://40.87.43.191:3000/api/com.mycontext.ChangeMedicalRecordOwner",
            body: JSON.stringify(ownership)
          },
          (error, response, body) => {
            if (error) {
              res.json({
                success: false,
                message: "Failed to change the ownership."
              });
            }

            res.json({
              success: true,
              message: "Ownership changed successfully."
            });
          }
        );
      } else {
        res.json({
          success: false,
          message: "Unable to find user email."
        });
      }
    })
    .catch(error => {
      res.json({
        success: false,
        message: "Unable to find user email."
      });
    });
};

exports.deleteRecord = function(req, res) {
  const userId = req.body.userId;
  const id = req.body.id;

  Request.delete(
    {
      url: "http://40.87.43.191:3000/api/com.mycontext.MedicalRecord/" + id
    },
    (error, response, body) => {
      if (error) {
        res.json({
          success: false,
          message: "Failed to delete medical record."
        });
      }

      Record.findByIdAndDelete(id)
        .then(result => {
          res.json({
            success: true,
            message: "Medical record deleted successfully."
          });
        })
        .catch(error => {
          res.json({
            success: false,
            message: "Failed to delete medical record."
          });
        });
    }
  );
};
