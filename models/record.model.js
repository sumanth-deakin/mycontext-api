const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseFieldEncryption = require("mongoose-field-encryption")
  .fieldEncryption;

let RecordSchema = new Schema({
  name: {
    type: String
  },
  price: {
    type: String
  },
  country: {
    type: String
  },
  age_at_diagnosis: {
    type: String
  },
  ajcc_stage_3_edition: {
    type: String
  },
  aya_site_recode_who_2008: {
    type: String
  },
  behavior: {
    type: String
  },
  behavior_code: {
    type: String
  },
  behavior_recode_for_analysis: {
    type: String
  },
  breast_adjusted_ajcc_6_stage: {
    type: String
  },
  breast_adjusted_ajcc_6m: {
    type: String
  },
  breast_adjusted_ajcc_6n: {
    type: String
  },
  breast_adjusted_ajcc_6t: {
    type: String
  },
  breast_subtype: {
    type: String
  },
  cause_of_death_to_seer_site_recode: {
    type: String
  },
  cod_to_site_rec_km: {
    type: String
  },
  coding_system_for_eod: {
    type: String
  },
  cs_extension: {
    type: String
  },
  cs_lymph_nodes: {
    type: String
  },
  cs_lymph_nodes_eval: {
    type: String
  },
  cs_mets_at_dx: {
    type: String
  },
  cs_mets_at_dx_bone: {
    type: String
  },
  cs_mets_at_dx_brain: {
    type: String
  },
  cs_mets_at_dx_liver: {
    type: String
  },
  cs_mets_at_dx_lung: {
    type: String
  },
  cs_mets_eval: {
    type: String
  },
  cs_schema_ajcc_6: {
    type: String
  },
  cs_schema_v0204: {
    type: String
  },
  cs_site_specific_factor_10: {
    type: String
  },
  cs_site_specific_factor_11: {
    type: String
  },
  cs_site_specific_factor_13: {
    type: String
  },
  cs_site_specific_factor_15: {
    type: String
  },
  cs_site_specific_factor_16: {
    type: String
  },
  cs_site_specific_factor_8: {
    type: String
  },
  cs_site_specific_factor_1: {
    type: String
  },
  cs_site_specific_factor_12: {
    type: String
  },
  cs_site_specific_factor_2: {
    type: String
  },
  cs_site_specific_factor_25: {
    type: String
  },
  cs_site_specific_factor_3: {
    type: String
  },
  cs_site_specific_factor_4: {
    type: String
  },
  cs_site_specific_factor_5: {
    type: String
  },
  cs_site_specific_factor_6: {
    type: String
  },
  cs_site_specific_factor_7: {
    type: String
  },
  cs_site_specific_factor_9: {
    type: String
  },
  cs_tumor_size: {
    type: String
  },
  cs_tumor_size_ext_eval: {
    type: String
  },
  cs_version_derived: {
    type: String
  },
  cs_version_input_derived: {
    type: String
  },
  cs_version_input_original: {
    type: String
  },
  derived_ajcc: {
    type: String
  },
  derived_ajcc_6_m: {
    type: String
  },
  derived_ajcc_6_n: {
    type: String
  },
  derived_ajcc_6_stage_grp: {
    type: String
  },
  derived_ajcc_6_t: {
    type: String
  },
  derived_ajcc_7_stage_grp: {
    type: String
  },
  derived_ajcc_7m: {
    type: String
  },
  derived_ajcc_7n: {
    type: String
  },
  derived_ajcc_7t: {
    type: String
  },
  derived_ss1977: {
    type: String
  },
  derived_ss2000: {
    type: String
  },
  derviced_her_2_recode: {
    type: String
  },
  diagnostic_confirmation: {
    type: String
  },
  eod_extension: {
    type: String
  },
  eod_extension_prost_path: {
    type: String
  },
  eod_lymph_node_involv: {
    type: String
  },
  eod_old_13_digit: {
    type: String
  },
  eod_old_2_digit: {
    type: String
  },
  eod_old_4_digit: {
    type: String
  },
  eod_tumor_size: {
    type: String
  },
  er_status_recode_breast_cancer: {
    type: String
  },
  first_maligant_primary_indicator: {
    type: String
  },
  gender: {
    type: String
  },
  grade: {
    type: String
  },
  histologic_type: {
    type: String
  },
  histology: {
    type: String
  },
  histology_recode_brain_groupings: {
    type: String
  },
  histology_recode_broad_groupings: {
    type: String
  },
  iccc_site_rec_recode_icd_0_3: {
    type: String
  },
  iccc_site_recode_icd_0_3: {
    type: String
  },
  ihs_link: {
    type: String
  },
  insurance_recode: {
    type: String
  },
  laterality: {
    type: String
  },
  lymph_vascular_invasion: {
    type: String
  },
  lymphoma_subtype_recode_who_2008: {
    type: String
  },
  lymphomas_ann_arbor_staging: {
    type: String
  },
  m_value_based_on_ajcc_3: {
    type: String
  },
  marital_status: {
    type: String
  },
  month_of_diagnosis: {
    type: String
  },
  n_value_based_on_ajcc_3: {
    type: String
  },
  nhia_derived_hispanic_origin: {
    type: String
  },
  origin_recode_niha: {
    type: String
  },
  patient_id: {
    type: String
  },
  primary_by_internationals_rules: {
    type: String
  },
  primary_site: {
    type: String
  },
  race: {
    type: String
  },
  race_recode_1: {
    type: String
  },
  race_recode_2: {
    type: String
  },
  reason_for_no_surgery: {
    type: String
  },
  recode_icd_0_2_to_10: {
    type: String
  },
  recode_icd_0_2_to_9: {
    type: String
  },
  regional_nodes_examined: {
    type: String
  },
  regional_nodes_positive: {
    type: String
  },
  rx_summ: {
    type: String
  },
  rx_summ_reg_ln_examined: {
    type: String
  },
  rx_summ_scope_reg: {
    type: String
  },
  rx_summ_scope_reg_ln_sur: {
    type: String
  },
  rx_summ_surg_oth: {
    type: String
  },
  rx_summ_surg_oth_reg_or_dis: {
    type: String
  },
  rx_summ_surg_type: {
    type: String
  },
  seer_cause_specific_death_classification: {
    type: String
  },
  seer_historic_stage_a: {
    type: String
  },
  seer_modified_ajcc_stage_3_edition: {
    type: String
  },
  seer_other_cause_specific_death_classification: {
    type: String
  },
  seer_record_number: {
    type: String
  },
  seer_registry: {
    type: String
  },
  seer_summary_stage_1977: {
    type: String
  },
  seer_summary_stage_2000: {
    type: String
  },
  seer_type_of_follow_up: {
    type: String
  },
  sequence_number: {
    type: String
  },
  site_recode_icd_0_3: {
    type: String
  },
  state_county_recode: {
    type: String
  },
  sumary_stage_2000: {
    type: String
  },
  survival_months: {
    type: String
  },
  survival_months_flags: {
    type: String
  },
  t_value_based_on_ajcc_3: {
    type: String
  },
  total_benign_tumors: {
    type: String
  },
  total_situ_tumors: {
    type: String
  },
  tumor_marker_1: {
    type: String
  },
  tumor_marker_2: {
    type: String
  },
  tumor_marker_3: {
    type: String
  },
  type_of_reporting_source: {
    type: String
  },
  vital_status_code: {
    type: String
  },
  year_of_birth: {
    type: String
  },
  year_of_diagnosis: {
    type: String
  }
});

RecordSchema.plugin(mongooseFieldEncryption, {
  fields: [
    "age_at_diagnosis",
    "ajcc_stage_3_edition",
    "aya_site_recode_who_2008",
    "behavior",
    "behavior_code",
    "behavior_recode_for_analysis",
    "breast_adjusted_ajcc_6_stage",
    "breast_adjusted_ajcc_6m",
    "breast_adjusted_ajcc_6n",
    "breast_adjusted_ajcc_6t",
    "breast_subtype",
    "cause_of_death_to_seer_site_recode",
    "cod_to_site_rec_km",
    "coding_system_for_eod",
    "cs_extension",
    "cs_lymph_nodes",
    "cs_lymph_nodes_eval",
    "cs_mets_at_dx",
    "cs_mets_at_dx_bone",
    "cs_mets_at_dx_brain",
    "cs_mets_at_dx_liver",
    "cs_mets_at_dx_lung",
    "cs_mets_eval",
    "cs_schema_ajcc_6",
    "cs_schema_v0204",
    "cs_site-specific_factor_10",
    "cs_site-specific_factor_11",
    "cs_site-specific_factor_13",
    "cs_site-specific_factor_15",
    "cs_site-specific_factor_16",
    "cs_site-specific_factor_8",
    "cs_site_specific_factor_1",
    "cs_site_specific_factor_12",
    "cs_site_specific_factor_2",
    "cs_site_specific_factor_25",
    "cs_site_specific_factor_3",
    "cs_site_specific_factor_4",
    "cs_site_specific_factor_5",
    "cs_site_specific_factor_6",
    "cs_site_specific_factor_7",
    "cs_site_specific_factor_9",
    "cs_tumor_size_ext_eval",
    "cs_version_derived",
    "cs_version_input_derived",
    "cs_version_input_original",
    "derived_ajcc",
    "derived_ajcc_6_m",
    "derived_ajcc_6_n",
    "derived_ajcc_6_stage_grp",
    "derived_ajcc_6_t",
    "derived_ajcc_7_stage_grp",
    "derived_ajcc_7m",
    "derived_ajcc_7n",
    "derived_ajcc_7t",
    "derived_ss1977",
    "derived_ss2000",
    "derviced_her_2_recode",
    "diagnostic_confirmation",
    "eod_extension",
    "eod_extension_prost_path",
    "eod_lymph_node_involv",
    "eod_old_13_digit",
    "eod_old_2_digit",
    "eod_old_4_digit",
    "eod_tumor_size",
    "er_status_recode_breast_cancer",
    "first_maligant_primary_indicator",
    "grade",
    "histologic_type",
    "histology",
    "histology_recode_brain_groupings",
    "histology_recode_broad_groupings",
    "iccc_site_rec_recode_icd_0_3",
    "iccc_site_recode_icd_0_3",
    "ihs_link",
    "insurance_recode",
    "laterality",
    "lymph_vascular_invasion",
    "lymphoma_subtype_recode_who_2008",
    "lymphomas_ann_arbor_staging",
    "m_value_based_on_ajcc_3",
    "marital_status",
    "month_of_diagnosis",
    "n_value_based_on_ajcc_3",
    "nhia_derived_hispanic_origin",
    "origin_recode_niha",
    "patient_id",
    "primary_by_internationals_rules",
    "primary_site",
    "race",
    "race_recode_1",
    "race_recode_2",
    "reason_for_no_surgery",
    "recode_icd_0_2_to_10",
    "recode_icd_0_2_to_9",
    "regional_nodes_examined",
    "regional_nodes_positive",
    "rx_summ",
    "rx_summ_reg_ln_examined",
    "rx_summ_scope_reg",
    "rx_summ_scope_reg_ln_sur",
    "rx_summ_surg_oth",
    "rx_summ_surg_oth_reg_or_dis",
    "rx_summ_surg_type",
    "seer_cause_specific_death_classification",
    "seer_historic_stage_a",
    "seer_modified_ajcc_stage_3_edition",
    "seer_other_cause_specific_death_classification",
    "seer_record_number",
    "seer_registry",
    "seer_summary_stage_1977",
    "seer_summary_stage_2000",
    "seer_type_of_follow_up",
    "sequence_number",
    "site_recode_icd_0_3",
    "state_county_recode",
    "sumary_stage_2000",
    "survival_months",
    "survival_months_flags",
    "t_value_based_on_ajcc_3",
    "total_benign_tumors",
    "total_situ_tumors",
    "tumor_marker_1",
    "tumor_marker_2",
    "tumor_marker_3",
    "type_of_reporting_source",
    "vital_status_code",
    "year_of_diagnosis"
  ],
  secret: "mycontext"
});

module.exports = mongoose.model("record", RecordSchema, "records");
