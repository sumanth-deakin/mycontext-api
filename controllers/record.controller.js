const Record = require("../models/record.model");
const Request = require("request");
const User = require("../models/user.model");
const Cryptr = require("cryptr");

exports.addRecord = function(req, res) {
  const userId = req.body.userId;

  const new_record = new Record(req.body.data);
  const cryptr = new Cryptr(new_record.id);
  const encryptedRecord = cryptr.encrypt(JSON.stringify(new_record));

  var medicalRecord = {
    $class: "com.mycontext.MedicalRecord",
    medicalRecordId: new_record.id,
    name: new_record.name,
    cs_tumor_size: new_record.cs_tumor_size,
    gender: new_record.gender,
    cancer_type: new_record.cancer_type,
    year_of_birth: new_record.year_of_birth,
    price: new_record.price,
    others: encryptedRecord,
    owner: "resource:com.mycontext.Owner#" + userId
  };

  Request.post(
    {
      headers: { "content-type": "application/json" },
      url: "http://40.76.41.106:3000/api/com.mycontext.MedicalRecord",
      body: JSON.stringify(medicalRecord)
    },
    (error, response, body) => {
      if (error) {
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
};

exports.listRecords = function(req, res) {
  const from = req.body.from;
  const size = req.body.size;

  Request("http://40.76.41.106:3000/api/com.mycontext.MedicalRecord", function(
    error,
    response,
    body
  ) {
    if (error) {
      res.json({
        success: false,
        message: "Unable to fetch medical records."
      });
    }

    const records = JSON.parse(body);

    res.json({
      success: true,
      data: records,
      message: "Medical records fetched successfully."
    });
  });
};

exports.updateRecord = function(req, res) {
  const userId = req.body.userId;

  const record = req.body.data;
  const cryptr = new Cryptr(record._id);
  const encryptedRecord = cryptr.encrypt(JSON.stringify(record));

  var medicalRecord = {
    $class: "com.mycontext.MedicalRecord",
    medicalRecordId: record._id,
    name: record.name,
    cs_tumor_size: record.cs_tumor_size,
    gender: record.gender,
    cancer_type: record.cancer_type,
    year_of_birth: record.year_of_birth,
    price: record.price,
    others: encryptedRecord,
    owner: "resource:com.mycontext.Owner#" + userId
  };

  Request.put(
    {
      headers: { "content-type": "application/json" },
      url: "http://40.76.41.106:3000/api/com.mycontext.MedicalRecord/"+record._id,
      body: JSON.stringify(medicalRecord)
    },
    (error, response, body) => {
      if (error) {
        res.json({
          success: false,
          message: "Failed to update medical record."
        });
      }

      res.json({
        success: true,
        message: "Medical record updated successfully."
      });
    }
  );
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
    "http://40.76.41.106:3000/api/com.mycontext.MedicalRecord?filter=" + filter,
    function(error, response, body) {
      if (error) {
        res.json({
          success: false,
          message: "Unable to fetch medical records."
        });
      }

      const records = JSON.parse(body);
      const decryptedRecords = [];

      records.map(record => {
        const cryptr = new Cryptr(record.medicalRecordId);
        const decryptedRecord = cryptr.decrypt(record.others);
        decryptedRecords.push(JSON.parse(decryptedRecord));
      });

      res.json({
        success: true,
        data: decryptedRecords,
        message: "Owner medical records fetched successfully."
      });
    }
  );
};

exports.viewRecord = function(req, res) {
  const id = req.body.id;

  Request(
    "http://40.76.41.106:3000/api/com.mycontext.MedicalRecord/" + id,
    function(error, response, body) {
      if (error) {
        res.json({
          success: false,
          message: "Unable to fetch medical record."
        });
      }

      const record = JSON.parse(body);
      const cryptr = new Cryptr(record.medicalRecordId);
      const decryptedRecord = cryptr.decrypt(record.others);

      res.json({
        success: true,
        data: JSON.parse(decryptedRecord),
        message: "Medical record fetched successfully."
      });
    }
  );
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
              "http://40.76.41.106:3000/api/com.mycontext.ChangeMedicalRecordOwner",
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
      url: "http://40.76.41.106:3000/api/com.mycontext.MedicalRecord/" + id
    },
    (error, response, body) => {
      if (error) {
        res.json({
          success: false,
          message: "Failed to delete medical record."
        });
      }

      res.json({
        success: true,
        message: "Medical record deleted successfully."
      });
    }
  );
};
