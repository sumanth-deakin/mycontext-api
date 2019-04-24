const Record = require("../models/record.model");
const Request = require("request");
const User = require("../models/user.model");

exports.addRecord = function(req, res) {
  const userId = req.body.userId;

  const new_record = new Record({
    name: req.body.name,
    price: req.body.price,
    age_at_diagnosis: req.body.age_at_diagnosis,
    ajcc_stage_3_edition: req.body.ajcc_stage_3_edition,
    aya_site_recode_who_2008: req.body.aya_site_recode_who_2008,
    behavior: req.body.behavior,
    behavior_code: req.body.behavior_code,
    behavior_recode_for_analysis: req.body.behavior_recode_for_analysis,
    breast_adjusted_ajcc_6_stage: req.body.breast_adjusted_ajcc_6_stage,
    breast_adjusted_ajcc_6m: req.body.breast_adjusted_ajcc_6m,
    breast_adjusted_ajcc_6n: req.body.breast_adjusted_ajcc_6n,
    breast_adjusted_ajcc_6t: req.body.breast_adjusted_ajcc_6t,
    breast_subtype: req.body.breast_subtype,
    cause_of_death_to_seer_site_recode:
      req.body.cause_of_death_to_seer_site_recode,
    cod_to_site_rec_km: req.body.cod_to_site_rec_km,
    coding_system_for_eod: req.body.coding_system_for_eod,
    cs_extension: req.body.cs_extension,
    cs_lymph_nodes: req.body.cs_lymph_nodes,
    cs_lymph_nodes_eval: req.body.cs_lymph_nodes_eval,
    cs_mets_at_dx: req.body.cs_mets_at_dx,
    cs_mets_at_dx_bone: req.body.cs_mets_at_dx_bone,
    cs_mets_at_dx_brain: req.body.cs_mets_at_dx_brain,
    cs_mets_at_dx_liver: req.body.cs_mets_at_dx_liver,
    cs_mets_at_dx_lung: req.body.cs_mets_at_dx_lung,
    cs_mets_eval: req.body.cs_mets_eval,
    cs_schema_ajcc_6: req.body.cs_schema_ajcc_6,
    cs_schema_v0204: req.body.cs_schema_v0204,
    cs_sitespecific_factor_10: req.body.cs_sitespecific_factor_10,
    cs_sitespecific_factor_11: req.body.cs_sitespecific_factor_11,
    cs_sitespecific_factor_13: req.body.cs_sitespecific_factor_13,
    cs_sitespecific_factor_15: req.body.cs_sitespecific_factor_15,
    cs_sitespecific_factor_16: req.body.cs_sitespecific_factor_16,
    cs_sitespecific_factor_8: req.body.cs_sitespecific_factor_8,
    cs_site_specific_factor_1: req.body.cs_site_specific_factor_1,
    cs_site_specific_factor_12: req.body.cs_site_specific_factor_12,
    cs_site_specific_factor_2: req.body.cs_site_specific_factor_2,
    cs_site_specific_factor_25: req.body.cs_site_specific_factor_25,
    cs_site_specific_factor_3: req.body.cs_site_specific_factor_3,
    cs_site_specific_factor_4: req.body.cs_site_specific_factor_4,
    cs_site_specific_factor_5: req.body.cs_site_specific_factor_5,
    cs_site_specific_factor_6: req.body.cs_site_specific_factor_6,
    cs_site_specific_factor_7: req.body.cs_site_specific_factor_7,
    cs_site_specific_factor_9: req.body.cs_site_specific_factor_9,
    cs_tumor_size: req.body.cs_tumor_size,
    cs_tumor_size_ext_eval: req.body.cs_tumor_size_ext_eval,
    cs_version_derived: req.body.cs_version_derived,
    cs_version_input_derived: req.body.cs_version_input_derived,
    cs_version_input_original: req.body.cs_version_input_original,
    derived_ajcc: req.body.derived_ajcc,
    derived_ajcc_6_m: req.body.derived_ajcc_6_m,
    derived_ajcc_6_n: req.body.derived_ajcc_6_n,
    derived_ajcc_6_stage_grp: req.body.derived_ajcc_6_stage_grp,
    derived_ajcc_6_t: req.body.derived_ajcc_6_t,
    derived_ajcc_7_stage_grp: req.body.derived_ajcc_7_stage_grp,
    derived_ajcc_7m: req.body.derived_ajcc_7m,
    derived_ajcc_7n: req.body.derived_ajcc_7n,
    derived_ajcc_7t: req.body.derived_ajcc_7t,
    derived_ss1977: req.body.derived_ss1977,
    derived_ss2000: req.body.derived_ss2000,
    derviced_her_2_recode: req.body.derviced_her_2_recode,
    diagnostic_confirmation: req.body.diagnostic_confirmation,
    eod_extension: req.body.eod_extension,
    eod_extension_prost_path: req.body.eod_extension_prost_path,
    eod_lymph_node_involv: req.body.eod_lymph_node_involv,
    eod_old_13_digit: req.body.eod_old_13_digit,
    eod_old_2_digit: req.body.eod_old_2_digit,
    eod_old_4_digit: req.body.eod_old_4_digit,
    eod_tumor_size: req.body.eod_tumor_size,
    er_status_recode_breast_cancer: req.body.er_status_recode_breast_cancer,
    first_maligant_primary_indicator: req.body.first_maligant_primary_indicator,
    gender: req.body.gender,
    grade: req.body.grade,
    histologic_type: req.body.histologic_type,
    histology: req.body.histology,
    histology_recode_brain_groupings: req.body.histology_recode_brain_groupings,
    histology_recode_broad_groupings: req.body.histology_recode_broad_groupings,
    iccc_site_rec_recode_icd_0_3: req.body.iccc_site_rec_recode_icd_0_3,
    iccc_site_recode_icd_0_3: req.body.iccc_site_recode_icd_0_3,
    ihs_link: req.body.ihs_link,
    insurance_recode: req.body.insurance_recode,
    laterality: req.body.laterality,
    lymph_vascular_invasion: req.body.lymph_vascular_invasion,
    lymphoma_subtype_recode_who_2008: req.body.lymphoma_subtype_recode_who_2008,
    lymphomas_ann_arbor_staging: req.body.lymphomas_ann_arbor_staging,
    m_value_based_on_ajcc_3: req.body.m_value_based_on_ajcc_3,
    marital_status: req.body.marital_status,
    month_of_diagnosis: req.body.month_of_diagnosis,
    n_value_based_on_ajcc_3: req.body.n_value_based_on_ajcc_3,
    nhia_derived_hispanic_origin: req.body.nhia_derived_hispanic_origin,
    origin_recode_niha: req.body.origin_recode_niha,
    patient_id: req.body.patient_id,
    primary_by_internationals_rules: req.body.primary_by_internationals_rules,
    primary_site: req.body.primary_site,
    race: req.body.race,
    race_recode_1: req.body.race_recode_1,
    race_recode_2: req.body.race_recode_2,
    reason_for_no_surgery: req.body.reason_for_no_surgery,
    recode_icd_0_2_to_10: req.body.recode_icd_0_2_to_10,
    recode_icd_0_2_to_9: req.body.recode_icd_0_2_to_9,
    regional_nodes_examined: req.body.regional_nodes_examined,
    regional_nodes_positive: req.body.regional_nodes_positive,
    rx_summ: req.body.rx_summ,
    rx_summ_reg_ln_examined: req.body.rx_summ_reg_ln_examined,
    rx_summ_scope_reg: req.body.rx_summ_scope_reg,
    rx_summ_scope_reg_ln_sur: req.body.rx_summ_scope_reg_ln_sur,
    rx_summ_surg_oth: req.body.rx_summ_surg_oth,
    rx_summ_surg_oth_reg_or_dis: req.body.rx_summ_surg_oth_reg_or_dis,
    rx_summ_surg_type: req.body.rx_summ_surg_type,
    seer_cause_specific_death_classification:
      req.body.seer_cause_specific_death_classification,
    seer_historic_stage_a: req.body.seer_historic_stage_a,
    seer_modified_ajcc_stage_3_edition:
      req.body.seer_modified_ajcc_stage_3_edition,
    seer_other_cause_specific_death_classification:
      req.body.seer_other_cause_specific_death_classification,
    seer_record_number: req.body.seer_record_number,
    seer_registry: req.body.seer_registry,
    seer_summary_stage_1977: req.body.seer_summary_stage_1977,
    seer_summary_stage_2000: req.body.seer_summary_stage_2000,
    seer_type_of_follow_up: req.body.seer_type_of_follow_up,
    sequence_number: req.body.sequence_number,
    site_recode_icd_0_3: req.body.site_recode_icd_0_3,
    state_county_recode: req.body.state_county_recode,
    sumary_stage_2000: req.body.sumary_stage_2000,
    survival_months: req.body.survival_months,
    survival_months_flags: req.body.survival_months_flags,
    t_value_based_on_ajcc_3: req.body.t_value_based_on_ajcc_3,
    total_benign_tumors: req.body.total_benign_tumors,
    total_situ_tumors: req.body.total_situ_tumors,
    tumor_marker_1: req.body.tumor_marker_1,
    tumor_marker_2: req.body.tumor_marker_2,
    tumor_marker_3: req.body.tumor_marker_3,
    type_of_reporting_source: req.body.type_of_reporting_source,
    vital_status_code: req.body.vital_status_code,
    year_of_birth: req.body.year_of_birth,
    year_of_diagnosis: req.body.year_of_diagnosis
  });

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
    "%7B%22owner%22%3A%20%22resource%3Acom.mycontext.Owner%23" +
    userId +
    "%22%7D";

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

exports.listOwnerRecords = function(req, res) {
  const from = req.body.from;
  const size = req.body.size;
  const userId = req.body.userId;

  const filter =
    "%7B%22owner%22%3A%20%22resource%3Acom.mycontext.Owner%23" +
    userId +
    "%22%7D";

  Request(
    "http://40.87.43.191:3000/api/com.mycontext.MedicalRecord?filter=" + filter,
    function(error, response, body) {
      const records = JSON.parse(body);
      const ids = [];

      records.map(record => {
        ids.push(record.medicalRecordId);
      });

      Record.find({
        _id: { $in: ids }
      })
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

exports.changeOwnership = function(req, res) {
  const medicalrecordId = req.body.medicalrecordId;
  const newOwnerEmail = req.body.newOwnerMail;

  User.findOne(
    {
      email: newOwnerEmail
    },
    function(err, user) {
      if (err) {
        res.json({
          success: false,
          message: "Unable to find user email."
        });
      }

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
    }
  );
};
