const Utils = require("../../services/utils/utils");
const utils = new Utils({ config: { logging: false } });
const { generateMongoIdFromString } = utils;
module.exports = {
  providers: generateMongoIdFromString("april"),
  plans: {
    Core: generateMongoIdFromString("Core april "),
    EssentialIPOrOP: generateMongoIdFromString("EssentialIPOrOP april "),
    EssentialIPOrExtensiveOP: generateMongoIdFromString(
      "EssentialIPOrExtensiveOP april "
    ),
    EssentialIPOrEliteOP: generateMongoIdFromString(
      "EssentialIPOrEliteOP april "
    ),
    ExtensiveIPOrOP: generateMongoIdFromString("ExtensiveIPOrOP april "),
    ExtensiveIPOrEssentialOP: generateMongoIdFromString(
      "ExtensiveIPOrEssentialOP april "
    ),
    ExtensiveIPOrEliteOP: generateMongoIdFromString(
      "ExtensiveIPOrEliteOP april "
    ),
    EliteIPOrOP: generateMongoIdFromString("EliteIPOrOP april "),
    EliteIPOrEssentialOP: generateMongoIdFromString(
      "EliteIPOrEssentialOP april "
    ),
    EliteIPOrExtensiveOP: generateMongoIdFromString(
      "EliteIPOrExtensiveOP april "
    ),
  },
  pricingTables: {
    Core: {
      WorldwideExcludingUSA: generateMongoIdFromString(
        "Core WorldwideExcludingUSA april "
      ),
    },
    EssentialIPOrOP: {
      WorldwideIncludingUSA: generateMongoIdFromString(
        "EssentialIPOrOP WorldwideIncludingUSA april "
      ),
      WorldwideExcludingUSA: generateMongoIdFromString(
        "EssentialIPOrOP WorldwideExcludingUSA april "
      ),
    },
    EssentialIPOrExtensiveOP: {
      WorldwideIncludingUSA: generateMongoIdFromString(
        "EssentialIPOrExtensiveOP WorldwideIncludingUSA april "
      ),
      WorldwideExcludingUSA: generateMongoIdFromString(
        "EssentialIPOrExtensiveOP WorldwideExcludingUSA april "
      ),
    },
    EssentialIPOrEliteOP: {
      WorldwideIncludingUSA: generateMongoIdFromString(
        "EssentialIPOrEliteOP WorldwideIncludingUSA april "
      ),
      WorldwideExcludingUSA: generateMongoIdFromString(
        "EssentialIPOrEliteOP WorldwideExcludingUSA april "
      ),
    },
    ExtensiveIPOrOP: {
      WorldwideIncludingUSA: generateMongoIdFromString(
        "ExtensiveIPOrOP WorldwideIncludingUSA april "
      ),
      WorldwideExcludingUSA: generateMongoIdFromString(
        "ExtensiveIPOrOP WorldwideExcludingUSA april "
      ),
    },
    ExtensiveIPOrEssentialOP: {
      WorldwideIncludingUSA: generateMongoIdFromString(
        "ExtensiveIPOrEssentialOP WorldwideIncludingUSA april "
      ),
      WorldwideExcludingUSA: generateMongoIdFromString(
        "ExtensiveIPOrEssentialOP WorldwideExcludingUSA april "
      ),
    },
    ExtensiveIPOrEliteOP: {
      WorldwideIncludingUSA: generateMongoIdFromString(
        "ExtensiveIPOrEliteOP WorldwideIncludingUSA april "
      ),
      WorldwideExcludingUSA: generateMongoIdFromString(
        "ExtensiveIPOrEliteOP WorldwideExcludingUSA april "
      ),
    },
    EliteIPOrOP: {
      WorldwideIncludingUSA: generateMongoIdFromString(
        "EliteIPOrOP WorldwideIncludingUSA april "
      ),
      WorldwideExcludingUSA: generateMongoIdFromString(
        "EliteIPOrOP WorldwideExcludingUSA april "
      ),
    },
    EliteIPOrEssentialOP: {
      WorldwideIncludingUSA: generateMongoIdFromString(
        "EliteIPOrEssentialOP WorldwideIncludingUSA april "
      ),
      WorldwideExcludingUSA: generateMongoIdFromString(
        "EliteIPOrEssentialOP WorldwideExcludingUSA april "
      ),
    },
    EliteIPOrExtensiveOP: {
      WorldwideIncludingUSA: generateMongoIdFromString(
        "EliteIPOrExtensiveOP WorldwideIncludingUSA april "
      ),
      WorldwideExcludingUSA: generateMongoIdFromString(
        "EliteIPOrExtensiveOP WorldwideExcludingUSA april "
      ),
    },
  },
  coverages: {
    WorldwideExcludingUSA: generateMongoIdFromString(
      "coverages WorldwideExcludingUSA april "
    ),
    WorldwideIncludingUSA: generateMongoIdFromString(
      "coverages WorldwideIncludingUSA april "
    ),
  },
  modifiers: {
    benefits: {
      ClaimsHandling: generateMongoIdFromString("april  ClaimsHandling"),
      ChronicConditionCover: generateMongoIdFromString(
        "april  ChronicConditionCover"
      ),
      PreExistingConditionCover: generateMongoIdFromString(
        "april  PreExistingConditionCover"
      ),
      AccommodationType: generateMongoIdFromString("april  AccommodationType"),
      InPatientHospitalizationAndSurgery: generateMongoIdFromString(
        "april  InPatientHospitalizationAndSurgery"
      ),
      DiagnosticsAndTest: generateMongoIdFromString(
        "april  DiagnosticsAndTest"
      ),
      SurgeriesAndAnesthesia: generateMongoIdFromString(
        "april  SurgeriesAndAnesthesia"
      ),
      Oncology: generateMongoIdFromString("april  Oncology"),
      OrganTransplant: generateMongoIdFromString("april  OrganTransplant"),
      OutPatientBenefits: generateMongoIdFromString(
        "april  OutPatientBenefits"
      ),
      OutPatientConsultations: generateMongoIdFromString(
        "april  OutPatientConsultations"
      ),
      OutPatientSpecialists: generateMongoIdFromString(
        "april  OutPatientSpecialists"
      ),
      OutPatientMedicines: generateMongoIdFromString(
        "april  OutPatientMedicines"
      ),
      Vaccination: generateMongoIdFromString("april  Vaccination"),
      ScansAndDiagnosticTests: generateMongoIdFromString(
        "april  ScansAndDiagnosticTests"
      ),
      Physiotherapy: generateMongoIdFromString("april  Physiotherapy"),
      MaternityConsultationsScansAndDelivery: generateMongoIdFromString(
        "april  MaternityConsultationsScansAndDelivery"
      ),
      MaternityWaitingPeriod: generateMongoIdFromString(
        "april  MaternityWaitingPeriod"
      ),
      ComplicationsOfPregnancy: generateMongoIdFromString(
        "april  ComplicationsOfPregnancy"
      ),
      MaternityConsultationsScansAndDelivery1: generateMongoIdFromString(
        "april  MaternityConsultationsScansAndDelivery 1"
      ),
      MaternityWaitingPeriod1: generateMongoIdFromString(
        "april  MaternityWaitingPeriod 1"
      ),
      ComplicationsOfPregnancy1: generateMongoIdFromString(
        "april  ComplicationsOfPregnancy 1"
      ),
      NewBornCover: generateMongoIdFromString("april  NewBornCover"),
      Dental: generateMongoIdFromString("april  Dental"),
      DentalWaitingPeriod: generateMongoIdFromString(
        "april  DentalWaitingPeriod"
      ),
      Dental1: generateMongoIdFromString("april  Dental 1"),
      DentalWaitingPeriod1: generateMongoIdFromString(
        "april  DentalWaitingPeriod 1"
      ),
      OpticalBenefits: generateMongoIdFromString("april  OpticalBenefits"),
      WellnessAndHealthScreening: generateMongoIdFromString(
        "april  WellnessAndHealthScreening"
      ),
      AlternativeMedicines: generateMongoIdFromString(
        "april  AlternativeMedicines"
      ),
      MentalHealthBenefit: generateMongoIdFromString(
        "april  MentalHealthBenefit"
      ),
      EmergencyEvacuation: generateMongoIdFromString(
        "april  EmergencyEvacuation"
      ),
      VirtualOrTeleDoctor: generateMongoIdFromString(
        "april  VirtualOrTeleDoctor"
      ),
      OtherServices: generateMongoIdFromString("april  OtherServices"),
      MemberWebPortal: generateMongoIdFromString("april  MemberWebPortal"),
      MobileApplication: generateMongoIdFromString("april  MobileApplication"),
      HealthyConnect: generateMongoIdFromString("april  HealthyConnect"),
    },
    paymentFrequency: {
      Annually: generateMongoIdFromString("april  Annually"),
    },
    deductible: generateMongoIdFromString("april  deductible"),
    discount: generateMongoIdFromString("april discounts"),
    network: generateMongoIdFromString("april network"),
    network1: generateMongoIdFromString("april network 1"),
  },
};
