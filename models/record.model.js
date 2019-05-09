const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let RecordSchema = new Schema({
  name: {
    type: String
  },
  price: {
    type: String
  },
  cancer_type: {
    type: String
  },
  gp_practice: {
    type: String
  },
  gp_practice_address: {
    type: String
  },
  others: {
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

module.exports = mongoose.model("record", RecordSchema, "records");
