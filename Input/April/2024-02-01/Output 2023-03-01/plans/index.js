const april = require("../core-index.js");
const Enum = require("../../enum.js");
const core = require("../../core");

let plans = [
  {
    _id: april.plans.Core,
    provider: april.providers,
    title: "Core",
    notes: "",
    benefitCategories: [
      {
        categoryTitle: "General Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.chronicConditions,
              core.benefitTypes.preExistingCoverCondition,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [core.benefitTypes.claimHandling],
          },
        ],
      },
      {
        categoryTitle: "In-patient (Hospitalization & Surgery)",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [core.benefitTypes.accomodation],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.diagnosticsAndTest,
              core.benefitTypes.organTransplant,
              core.benefitTypes.surgeriesAndAnthesia,
              core.benefitTypes.oncology,
            ],
          },
          {
            userType: Enum.userType.Starter,
            benefitTypes: [
              core.benefitTypes.inPatientHospitializationandsurgery,
            ],
          },
        ],
      },
      {
        categoryTitle:
          "Out-patient (Consultations, Lab & Diagnostics, Pharmacy, Physiotherapy)",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [core.benefitTypes.physiotherapy],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.outPatientConsultation,
              core.benefitTypes.specialist,
              core.benefitTypes.medicine,
              core.benefitTypes.vaccination,
              core.benefitTypes.tests,
            ],
          },
          {
            userType: Enum.userType.Starter,
            benefitTypes: [core.benefitTypes.outPatientBenefit],
          },
        ],
      },
      {
        categoryTitle: "Maternity",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.maternity,
              core.benefitTypes.maternityWaitingPeriod,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.complicationOfPregnancy,
              core.benefitTypes.newBornCoverage,
            ],
          },
        ],
      },
      {
        categoryTitle: "Dental Benefit",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.dental,
              core.benefitTypes.dentalWaitingPeriod,
            ],
          },
        ],
      },
      {
        categoryTitle: "Additional Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.optical,
              core.benefitTypes.wellness,
              core.benefitTypes.emergencyEvacution,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.alternativeMedicine,
              core.benefitTypes.mentalHealth,
              core.benefitTypes.memberWebPortal,
              core.benefitTypes.mobileApplication,
              core.benefitTypes.virtualTele,
              core.benefitTypes.otherServices,
            ],
          },
        ],
      },
      {
        categoryTitle: "Added (Optional) Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.extendedEvacuation,
              core.benefitTypes.nonEmergency,
            ],
          },
        ],
      },
    ],
    pricingTables: [april.pricingTables.Core.WorldwideExcludingUSA],
    modifiers: [
      april.modifiers.benefits.ClaimsHandling,
      april.modifiers.benefits.ChronicConditionCover,
      april.modifiers.benefits.PreExistingConditionCover,
      april.modifiers.benefits.AccommodationType,
      april.modifiers.benefits.InPatientHospitalizationAndSurgery,
      april.modifiers.benefits.DiagnosticsAndTest,
      april.modifiers.benefits.SurgeriesAndAnesthesia,
      april.modifiers.benefits.Oncology,
      april.modifiers.benefits.OrganTransplant,
      april.modifiers.benefits.OutPatientBenefits,
      april.modifiers.benefits.OutPatientConsultations,
      april.modifiers.benefits.OutPatientSpecialists,
      april.modifiers.benefits.OutPatientMedicines,
      april.modifiers.benefits.Vaccination,
      april.modifiers.benefits.ScansAndDiagnosticTests,
      april.modifiers.benefits.Physiotherapy,
      april.modifiers.benefits.MaternityConsultationsScansAndDelivery,
      april.modifiers.benefits.MaternityWaitingPeriod,
      april.modifiers.benefits.ComplicationsOfPregnancy,
      april.modifiers.benefits.NewBornCover,
      april.modifiers.benefits.Dental,
      april.modifiers.benefits.DentalWaitingPeriod,
      april.modifiers.benefits.WellnessAndHealthScreening,
      april.modifiers.benefits.MentalHealthBenefit,
      april.modifiers.benefits.EmergencyEvacuation,
      april.modifiers.benefits.VirtualOrTeleDoctor,
      april.modifiers.benefits.OtherServices,
      april.modifiers.benefits.MemberWebPortal,
      april.modifiers.benefits.MobileApplication,
      april.modifiers.benefits.HealthyConnect,
      april.modifiers.paymentFrequency.Annually,
      april.modifiers.deductible,
      april.modifiers.network,
    ],
  },
  {
    _id: april.plans.EssentialIPOrOP,
    provider: april.providers,
    title: "Essential (IP/OP)",
    notes: "",
    benefitCategories: [
      {
        categoryTitle: "General Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.chronicConditions,
              core.benefitTypes.preExistingCoverCondition,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [core.benefitTypes.claimHandling],
          },
        ],
      },
      {
        categoryTitle: "In-patient (Hospitalization & Surgery)",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [core.benefitTypes.accomodation],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.diagnosticsAndTest,
              core.benefitTypes.organTransplant,
              core.benefitTypes.surgeriesAndAnthesia,
              core.benefitTypes.oncology,
            ],
          },
          {
            userType: Enum.userType.Starter,
            benefitTypes: [
              core.benefitTypes.inPatientHospitializationandsurgery,
            ],
          },
        ],
      },
      {
        categoryTitle:
          "Out-patient (Consultations, Lab & Diagnostics, Pharmacy, Physiotherapy)",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [core.benefitTypes.physiotherapy],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.outPatientConsultation,
              core.benefitTypes.specialist,
              core.benefitTypes.medicine,
              core.benefitTypes.vaccination,
              core.benefitTypes.tests,
            ],
          },
          {
            userType: Enum.userType.Starter,
            benefitTypes: [core.benefitTypes.outPatientBenefit],
          },
        ],
      },
      {
        categoryTitle: "Maternity",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.maternity,
              core.benefitTypes.maternityWaitingPeriod,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.complicationOfPregnancy,
              core.benefitTypes.newBornCoverage,
            ],
          },
        ],
      },
      {
        categoryTitle: "Dental Benefit",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.dental,
              core.benefitTypes.dentalWaitingPeriod,
            ],
          },
        ],
      },
      {
        categoryTitle: "Additional Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.optical,
              core.benefitTypes.wellness,
              core.benefitTypes.emergencyEvacution,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.alternativeMedicine,
              core.benefitTypes.mentalHealth,
              core.benefitTypes.memberWebPortal,
              core.benefitTypes.mobileApplication,
              core.benefitTypes.virtualTele,
              core.benefitTypes.otherServices,
            ],
          },
        ],
      },
      {
        categoryTitle: "Added (Optional) Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.extendedEvacuation,
              core.benefitTypes.nonEmergency,
            ],
          },
        ],
      },
    ],
    pricingTables: [
      april.pricingTables.EssentialIPOrOP.WorldwideIncludingUSA,
      april.pricingTables.EssentialIPOrOP.WorldwideExcludingUSA,
    ],
    modifiers: [
      april.modifiers.benefits.ClaimsHandling,
      april.modifiers.benefits.ChronicConditionCover,
      april.modifiers.benefits.PreExistingConditionCover,
      april.modifiers.benefits.AccommodationType,
      april.modifiers.benefits.InPatientHospitalizationAndSurgery,
      april.modifiers.benefits.DiagnosticsAndTest,
      april.modifiers.benefits.SurgeriesAndAnesthesia,
      april.modifiers.benefits.Oncology,
      april.modifiers.benefits.OrganTransplant,
      april.modifiers.benefits.OutPatientBenefits,
      april.modifiers.benefits.OutPatientConsultations,
      april.modifiers.benefits.OutPatientSpecialists,
      april.modifiers.benefits.OutPatientMedicines,
      april.modifiers.benefits.OpticalBenefits,
      april.modifiers.benefits.Vaccination,
      april.modifiers.benefits.ScansAndDiagnosticTests,
      april.modifiers.benefits.Physiotherapy,
      april.modifiers.benefits.MaternityConsultationsScansAndDelivery1,
      april.modifiers.benefits.MaternityWaitingPeriod1,
      april.modifiers.benefits.ComplicationsOfPregnancy1,
      april.modifiers.benefits.NewBornCover,
      april.modifiers.benefits.Dental1,
      april.modifiers.benefits.DentalWaitingPeriod,
      april.modifiers.benefits.WellnessAndHealthScreening,
      april.modifiers.benefits.MentalHealthBenefit,
      april.modifiers.benefits.EmergencyEvacuation,
      april.modifiers.benefits.VirtualOrTeleDoctor,
      april.modifiers.benefits.OtherServices,
      april.modifiers.benefits.MemberWebPortal,
      april.modifiers.benefits.MobileApplication,
      april.modifiers.benefits.HealthyConnect,
      april.modifiers.paymentFrequency.Annually,
      april.modifiers.deductible,
      april.modifiers.benefits.AlternativeMedicines,
      april.modifiers.network1,
    ],
  },
  {
    _id: april.plans.EssentialIPOrExtensiveOP,
    provider: april.providers,
    title: "Essential (IP) / Extensive (OP)",
    notes: "",
    benefitCategories: [
      {
        categoryTitle: "General Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.chronicConditions,
              core.benefitTypes.preExistingCoverCondition,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [core.benefitTypes.claimHandling],
          },
        ],
      },
      {
        categoryTitle: "In-patient (Hospitalization & Surgery)",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [core.benefitTypes.accomodation],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.diagnosticsAndTest,
              core.benefitTypes.organTransplant,
              core.benefitTypes.surgeriesAndAnthesia,
              core.benefitTypes.oncology,
            ],
          },
          {
            userType: Enum.userType.Starter,
            benefitTypes: [
              core.benefitTypes.inPatientHospitializationandsurgery,
            ],
          },
        ],
      },
      {
        categoryTitle:
          "Out-patient (Consultations, Lab & Diagnostics, Pharmacy, Physiotherapy)",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [core.benefitTypes.physiotherapy],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.outPatientConsultation,
              core.benefitTypes.specialist,
              core.benefitTypes.medicine,
              core.benefitTypes.vaccination,
              core.benefitTypes.tests,
            ],
          },
          {
            userType: Enum.userType.Starter,
            benefitTypes: [core.benefitTypes.outPatientBenefit],
          },
        ],
      },
      {
        categoryTitle: "Maternity",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.maternity,
              core.benefitTypes.maternityWaitingPeriod,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.complicationOfPregnancy,
              core.benefitTypes.newBornCoverage,
            ],
          },
        ],
      },
      {
        categoryTitle: "Dental Benefit",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.dental,
              core.benefitTypes.dentalWaitingPeriod,
            ],
          },
        ],
      },
      {
        categoryTitle: "Additional Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.optical,
              core.benefitTypes.wellness,
              core.benefitTypes.emergencyEvacution,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.alternativeMedicine,
              core.benefitTypes.mentalHealth,
              core.benefitTypes.memberWebPortal,
              core.benefitTypes.mobileApplication,
              core.benefitTypes.virtualTele,
              core.benefitTypes.otherServices,
            ],
          },
        ],
      },
      {
        categoryTitle: "Added (Optional) Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.extendedEvacuation,
              core.benefitTypes.nonEmergency,
            ],
          },
        ],
      },
    ],
    pricingTables: [
      april.pricingTables.EssentialIPOrExtensiveOP.WorldwideIncludingUSA,
      april.pricingTables.EssentialIPOrExtensiveOP.WorldwideExcludingUSA,
    ],
    modifiers: [
      april.modifiers.benefits.ClaimsHandling,
      april.modifiers.benefits.ChronicConditionCover,
      april.modifiers.benefits.PreExistingConditionCover,
      april.modifiers.benefits.AccommodationType,
      april.modifiers.benefits.InPatientHospitalizationAndSurgery,
      april.modifiers.benefits.DiagnosticsAndTest,
      april.modifiers.benefits.SurgeriesAndAnesthesia,
      april.modifiers.benefits.Oncology,
      april.modifiers.benefits.OrganTransplant,
      april.modifiers.benefits.OutPatientBenefits,
      april.modifiers.benefits.OutPatientConsultations,
      april.modifiers.benefits.OutPatientSpecialists,
      april.modifiers.benefits.OutPatientMedicines,
      april.modifiers.benefits.OpticalBenefits,
      april.modifiers.benefits.Vaccination,
      april.modifiers.benefits.ScansAndDiagnosticTests,
      april.modifiers.benefits.Physiotherapy,
      april.modifiers.benefits.MaternityConsultationsScansAndDelivery1,
      april.modifiers.benefits.MaternityWaitingPeriod1,
      april.modifiers.benefits.ComplicationsOfPregnancy1,
      april.modifiers.benefits.NewBornCover,
      april.modifiers.benefits.Dental1,
      april.modifiers.benefits.DentalWaitingPeriod,
      april.modifiers.benefits.WellnessAndHealthScreening,
      april.modifiers.benefits.MentalHealthBenefit,
      april.modifiers.benefits.EmergencyEvacuation,
      april.modifiers.benefits.VirtualOrTeleDoctor,
      april.modifiers.benefits.OtherServices,
      april.modifiers.benefits.MemberWebPortal,
      april.modifiers.benefits.MobileApplication,
      april.modifiers.benefits.HealthyConnect,
      april.modifiers.paymentFrequency.Annually,
      april.modifiers.deductible,
      april.modifiers.benefits.AlternativeMedicines,
      april.modifiers.network1,
    ],
  },
  {
    _id: april.plans.EssentialIPOrEliteOP,
    provider: april.providers,
    title: "Essential (IP) / Elite (OP)",
    notes: "",
    benefitCategories: [
      {
        categoryTitle: "General Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.chronicConditions,
              core.benefitTypes.preExistingCoverCondition,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [core.benefitTypes.claimHandling],
          },
        ],
      },
      {
        categoryTitle: "In-patient (Hospitalization & Surgery)",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [core.benefitTypes.accomodation],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.diagnosticsAndTest,
              core.benefitTypes.organTransplant,
              core.benefitTypes.surgeriesAndAnthesia,
              core.benefitTypes.oncology,
            ],
          },
          {
            userType: Enum.userType.Starter,
            benefitTypes: [
              core.benefitTypes.inPatientHospitializationandsurgery,
            ],
          },
        ],
      },
      {
        categoryTitle:
          "Out-patient (Consultations, Lab & Diagnostics, Pharmacy, Physiotherapy)",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [core.benefitTypes.physiotherapy],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.outPatientConsultation,
              core.benefitTypes.specialist,
              core.benefitTypes.medicine,
              core.benefitTypes.vaccination,
              core.benefitTypes.tests,
            ],
          },
          {
            userType: Enum.userType.Starter,
            benefitTypes: [core.benefitTypes.outPatientBenefit],
          },
        ],
      },
      {
        categoryTitle: "Maternity",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.maternity,
              core.benefitTypes.maternityWaitingPeriod,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.complicationOfPregnancy,
              core.benefitTypes.newBornCoverage,
            ],
          },
        ],
      },
      {
        categoryTitle: "Dental Benefit",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.dental,
              core.benefitTypes.dentalWaitingPeriod,
            ],
          },
        ],
      },
      {
        categoryTitle: "Additional Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.optical,
              core.benefitTypes.wellness,
              core.benefitTypes.emergencyEvacution,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.alternativeMedicine,
              core.benefitTypes.mentalHealth,
              core.benefitTypes.memberWebPortal,
              core.benefitTypes.mobileApplication,
              core.benefitTypes.virtualTele,
              core.benefitTypes.otherServices,
            ],
          },
        ],
      },
      {
        categoryTitle: "Added (Optional) Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.extendedEvacuation,
              core.benefitTypes.nonEmergency,
            ],
          },
        ],
      },
    ],
    pricingTables: [
      april.pricingTables.EssentialIPOrEliteOP.WorldwideIncludingUSA,
      april.pricingTables.EssentialIPOrEliteOP.WorldwideExcludingUSA,
    ],
    modifiers: [
      april.modifiers.benefits.ClaimsHandling,
      april.modifiers.benefits.ChronicConditionCover,
      april.modifiers.benefits.PreExistingConditionCover,
      april.modifiers.benefits.AccommodationType,
      april.modifiers.benefits.InPatientHospitalizationAndSurgery,
      april.modifiers.benefits.DiagnosticsAndTest,
      april.modifiers.benefits.SurgeriesAndAnesthesia,
      april.modifiers.benefits.Oncology,
      april.modifiers.benefits.OrganTransplant,
      april.modifiers.benefits.OutPatientBenefits,
      april.modifiers.benefits.OutPatientConsultations,
      april.modifiers.benefits.OutPatientSpecialists,
      april.modifiers.benefits.OutPatientMedicines,
      april.modifiers.benefits.OpticalBenefits,
      april.modifiers.benefits.Vaccination,
      april.modifiers.benefits.ScansAndDiagnosticTests,
      april.modifiers.benefits.Physiotherapy,
      april.modifiers.benefits.MaternityConsultationsScansAndDelivery1,
      april.modifiers.benefits.MaternityWaitingPeriod1,
      april.modifiers.benefits.ComplicationsOfPregnancy1,
      april.modifiers.benefits.NewBornCover,
      april.modifiers.benefits.Dental1,
      april.modifiers.benefits.DentalWaitingPeriod,
      april.modifiers.benefits.WellnessAndHealthScreening,
      april.modifiers.benefits.MentalHealthBenefit,
      april.modifiers.benefits.EmergencyEvacuation,
      april.modifiers.benefits.VirtualOrTeleDoctor,
      april.modifiers.benefits.OtherServices,
      april.modifiers.benefits.MemberWebPortal,
      april.modifiers.benefits.MobileApplication,
      april.modifiers.benefits.HealthyConnect,
      april.modifiers.paymentFrequency.Annually,
      april.modifiers.deductible,
      april.modifiers.benefits.AlternativeMedicines,
      april.modifiers.network1,
    ],
  },
  {
    _id: april.plans.ExtensiveIPOrOP,
    provider: april.providers,
    title: "Extensive (IP/OP)",
    notes: "",
    benefitCategories: [
      {
        categoryTitle: "General Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.chronicConditions,
              core.benefitTypes.preExistingCoverCondition,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [core.benefitTypes.claimHandling],
          },
        ],
      },
      {
        categoryTitle: "In-patient (Hospitalization & Surgery)",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [core.benefitTypes.accomodation],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.diagnosticsAndTest,
              core.benefitTypes.organTransplant,
              core.benefitTypes.surgeriesAndAnthesia,
              core.benefitTypes.oncology,
            ],
          },
          {
            userType: Enum.userType.Starter,
            benefitTypes: [
              core.benefitTypes.inPatientHospitializationandsurgery,
            ],
          },
        ],
      },
      {
        categoryTitle:
          "Out-patient (Consultations, Lab & Diagnostics, Pharmacy, Physiotherapy)",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [core.benefitTypes.physiotherapy],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.outPatientConsultation,
              core.benefitTypes.specialist,
              core.benefitTypes.medicine,
              core.benefitTypes.vaccination,
              core.benefitTypes.tests,
            ],
          },
          {
            userType: Enum.userType.Starter,
            benefitTypes: [core.benefitTypes.outPatientBenefit],
          },
        ],
      },
      {
        categoryTitle: "Maternity",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.maternity,
              core.benefitTypes.maternityWaitingPeriod,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.complicationOfPregnancy,
              core.benefitTypes.newBornCoverage,
            ],
          },
        ],
      },
      {
        categoryTitle: "Dental Benefit",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.dental,
              core.benefitTypes.dentalWaitingPeriod,
            ],
          },
        ],
      },
      {
        categoryTitle: "Additional Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.optical,
              core.benefitTypes.wellness,
              core.benefitTypes.emergencyEvacution,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.alternativeMedicine,
              core.benefitTypes.mentalHealth,
              core.benefitTypes.memberWebPortal,
              core.benefitTypes.mobileApplication,
              core.benefitTypes.virtualTele,
              core.benefitTypes.otherServices,
            ],
          },
        ],
      },
      {
        categoryTitle: "Added (Optional) Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.extendedEvacuation,
              core.benefitTypes.nonEmergency,
            ],
          },
        ],
      },
    ],
    pricingTables: [
      april.pricingTables.ExtensiveIPOrOP.WorldwideIncludingUSA,
      april.pricingTables.ExtensiveIPOrOP.WorldwideExcludingUSA,
    ],
    modifiers: [
      april.modifiers.benefits.ClaimsHandling,
      april.modifiers.benefits.ChronicConditionCover,
      april.modifiers.benefits.PreExistingConditionCover,
      april.modifiers.benefits.AccommodationType,
      april.modifiers.benefits.InPatientHospitalizationAndSurgery,
      april.modifiers.benefits.DiagnosticsAndTest,
      april.modifiers.benefits.SurgeriesAndAnesthesia,
      april.modifiers.benefits.Oncology,
      april.modifiers.benefits.OrganTransplant,
      april.modifiers.benefits.OutPatientBenefits,
      april.modifiers.benefits.OutPatientConsultations,
      april.modifiers.benefits.OutPatientSpecialists,
      april.modifiers.benefits.OutPatientMedicines,
      april.modifiers.benefits.OpticalBenefits,
      april.modifiers.benefits.Vaccination,
      april.modifiers.benefits.ScansAndDiagnosticTests,
      april.modifiers.benefits.Physiotherapy,
      april.modifiers.benefits.MaternityConsultationsScansAndDelivery1,
      april.modifiers.benefits.MaternityWaitingPeriod1,
      april.modifiers.benefits.ComplicationsOfPregnancy1,
      april.modifiers.benefits.NewBornCover,
      april.modifiers.benefits.Dental1,
      april.modifiers.benefits.DentalWaitingPeriod,
      april.modifiers.benefits.WellnessAndHealthScreening,
      april.modifiers.benefits.MentalHealthBenefit,
      april.modifiers.benefits.EmergencyEvacuation,
      april.modifiers.benefits.VirtualOrTeleDoctor,
      april.modifiers.benefits.OtherServices,
      april.modifiers.benefits.MemberWebPortal,
      april.modifiers.benefits.MobileApplication,
      april.modifiers.benefits.HealthyConnect,
      april.modifiers.paymentFrequency.Annually,
      april.modifiers.deductible,
      april.modifiers.benefits.AlternativeMedicines,
      april.modifiers.network1,
    ],
  },
  {
    _id: april.plans.ExtensiveIPOrEssentialOP,
    provider: april.providers,
    title: "Extensive (IP) / Essential (OP)",
    notes: "",
    benefitCategories: [
      {
        categoryTitle: "General Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.chronicConditions,
              core.benefitTypes.preExistingCoverCondition,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [core.benefitTypes.claimHandling],
          },
        ],
      },
      {
        categoryTitle: "In-patient (Hospitalization & Surgery)",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [core.benefitTypes.accomodation],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.diagnosticsAndTest,
              core.benefitTypes.organTransplant,
              core.benefitTypes.surgeriesAndAnthesia,
              core.benefitTypes.oncology,
            ],
          },
          {
            userType: Enum.userType.Starter,
            benefitTypes: [
              core.benefitTypes.inPatientHospitializationandsurgery,
            ],
          },
        ],
      },
      {
        categoryTitle:
          "Out-patient (Consultations, Lab & Diagnostics, Pharmacy, Physiotherapy)",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [core.benefitTypes.physiotherapy],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.outPatientConsultation,
              core.benefitTypes.specialist,
              core.benefitTypes.medicine,
              core.benefitTypes.vaccination,
              core.benefitTypes.tests,
            ],
          },
          {
            userType: Enum.userType.Starter,
            benefitTypes: [core.benefitTypes.outPatientBenefit],
          },
        ],
      },
      {
        categoryTitle: "Maternity",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.maternity,
              core.benefitTypes.maternityWaitingPeriod,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.complicationOfPregnancy,
              core.benefitTypes.newBornCoverage,
            ],
          },
        ],
      },
      {
        categoryTitle: "Dental Benefit",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.dental,
              core.benefitTypes.dentalWaitingPeriod,
            ],
          },
        ],
      },
      {
        categoryTitle: "Additional Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.optical,
              core.benefitTypes.wellness,
              core.benefitTypes.emergencyEvacution,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.alternativeMedicine,
              core.benefitTypes.mentalHealth,
              core.benefitTypes.memberWebPortal,
              core.benefitTypes.mobileApplication,
              core.benefitTypes.virtualTele,
              core.benefitTypes.otherServices,
            ],
          },
        ],
      },
      {
        categoryTitle: "Added (Optional) Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.extendedEvacuation,
              core.benefitTypes.nonEmergency,
            ],
          },
        ],
      },
    ],
    pricingTables: [
      april.pricingTables.ExtensiveIPOrEssentialOP.WorldwideIncludingUSA,
      april.pricingTables.ExtensiveIPOrEssentialOP.WorldwideExcludingUSA,
    ],
    modifiers: [
      april.modifiers.benefits.ClaimsHandling,
      april.modifiers.benefits.ChronicConditionCover,
      april.modifiers.benefits.PreExistingConditionCover,
      april.modifiers.benefits.AccommodationType,
      april.modifiers.benefits.InPatientHospitalizationAndSurgery,
      april.modifiers.benefits.DiagnosticsAndTest,
      april.modifiers.benefits.SurgeriesAndAnesthesia,
      april.modifiers.benefits.Oncology,
      april.modifiers.benefits.OrganTransplant,
      april.modifiers.benefits.OutPatientBenefits,
      april.modifiers.benefits.OutPatientConsultations,
      april.modifiers.benefits.OutPatientSpecialists,
      april.modifiers.benefits.OutPatientMedicines,
      april.modifiers.benefits.OpticalBenefits,
      april.modifiers.benefits.Vaccination,
      april.modifiers.benefits.ScansAndDiagnosticTests,
      april.modifiers.benefits.Physiotherapy,
      april.modifiers.benefits.MaternityConsultationsScansAndDelivery1,
      april.modifiers.benefits.MaternityWaitingPeriod1,
      april.modifiers.benefits.ComplicationsOfPregnancy1,
      april.modifiers.benefits.NewBornCover,
      april.modifiers.benefits.Dental1,
      april.modifiers.benefits.DentalWaitingPeriod,
      april.modifiers.benefits.WellnessAndHealthScreening,
      april.modifiers.benefits.MentalHealthBenefit,
      april.modifiers.benefits.EmergencyEvacuation,
      april.modifiers.benefits.VirtualOrTeleDoctor,
      april.modifiers.benefits.OtherServices,
      april.modifiers.benefits.MemberWebPortal,
      april.modifiers.benefits.MobileApplication,
      april.modifiers.benefits.HealthyConnect,
      april.modifiers.paymentFrequency.Annually,
      april.modifiers.deductible,
      april.modifiers.benefits.AlternativeMedicines,
      april.modifiers.network1,
    ],
  },
  {
    _id: april.plans.ExtensiveIPOrEliteOP,
    provider: april.providers,
    title: "Extensive (IP) / Elite(OP)",
    notes: "",
    benefitCategories: [
      {
        categoryTitle: "General Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.chronicConditions,
              core.benefitTypes.preExistingCoverCondition,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [core.benefitTypes.claimHandling],
          },
        ],
      },
      {
        categoryTitle: "In-patient (Hospitalization & Surgery)",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [core.benefitTypes.accomodation],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.diagnosticsAndTest,
              core.benefitTypes.organTransplant,
              core.benefitTypes.surgeriesAndAnthesia,
              core.benefitTypes.oncology,
            ],
          },
          {
            userType: Enum.userType.Starter,
            benefitTypes: [
              core.benefitTypes.inPatientHospitializationandsurgery,
            ],
          },
        ],
      },
      {
        categoryTitle:
          "Out-patient (Consultations, Lab & Diagnostics, Pharmacy, Physiotherapy)",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [core.benefitTypes.physiotherapy],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.outPatientConsultation,
              core.benefitTypes.specialist,
              core.benefitTypes.medicine,
              core.benefitTypes.vaccination,
              core.benefitTypes.tests,
            ],
          },
          {
            userType: Enum.userType.Starter,
            benefitTypes: [core.benefitTypes.outPatientBenefit],
          },
        ],
      },
      {
        categoryTitle: "Maternity",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.maternity,
              core.benefitTypes.maternityWaitingPeriod,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.complicationOfPregnancy,
              core.benefitTypes.newBornCoverage,
            ],
          },
        ],
      },
      {
        categoryTitle: "Dental Benefit",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.dental,
              core.benefitTypes.dentalWaitingPeriod,
            ],
          },
        ],
      },
      {
        categoryTitle: "Additional Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.optical,
              core.benefitTypes.wellness,
              core.benefitTypes.emergencyEvacution,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.alternativeMedicine,
              core.benefitTypes.mentalHealth,
              core.benefitTypes.memberWebPortal,
              core.benefitTypes.mobileApplication,
              core.benefitTypes.virtualTele,
              core.benefitTypes.otherServices,
            ],
          },
        ],
      },
      {
        categoryTitle: "Added (Optional) Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.extendedEvacuation,
              core.benefitTypes.nonEmergency,
            ],
          },
        ],
      },
    ],
    pricingTables: [
      april.pricingTables.ExtensiveIPOrEliteOP.WorldwideIncludingUSA,
      april.pricingTables.ExtensiveIPOrEliteOP.WorldwideExcludingUSA,
    ],
    modifiers: [
      april.modifiers.benefits.ClaimsHandling,
      april.modifiers.benefits.ChronicConditionCover,
      april.modifiers.benefits.PreExistingConditionCover,
      april.modifiers.benefits.AccommodationType,
      april.modifiers.benefits.InPatientHospitalizationAndSurgery,
      april.modifiers.benefits.DiagnosticsAndTest,
      april.modifiers.benefits.SurgeriesAndAnesthesia,
      april.modifiers.benefits.Oncology,
      april.modifiers.benefits.OrganTransplant,
      april.modifiers.benefits.OutPatientBenefits,
      april.modifiers.benefits.OutPatientConsultations,
      april.modifiers.benefits.OutPatientSpecialists,
      april.modifiers.benefits.OutPatientMedicines,
      april.modifiers.benefits.OpticalBenefits,
      april.modifiers.benefits.Vaccination,
      april.modifiers.benefits.ScansAndDiagnosticTests,
      april.modifiers.benefits.Physiotherapy,
      april.modifiers.benefits.MaternityConsultationsScansAndDelivery1,
      april.modifiers.benefits.MaternityWaitingPeriod1,
      april.modifiers.benefits.ComplicationsOfPregnancy1,
      april.modifiers.benefits.NewBornCover,
      april.modifiers.benefits.Dental1,
      april.modifiers.benefits.DentalWaitingPeriod,
      april.modifiers.benefits.WellnessAndHealthScreening,
      april.modifiers.benefits.MentalHealthBenefit,
      april.modifiers.benefits.EmergencyEvacuation,
      april.modifiers.benefits.VirtualOrTeleDoctor,
      april.modifiers.benefits.OtherServices,
      april.modifiers.benefits.MemberWebPortal,
      april.modifiers.benefits.MobileApplication,
      april.modifiers.benefits.HealthyConnect,
      april.modifiers.paymentFrequency.Annually,
      april.modifiers.deductible,
      april.modifiers.benefits.AlternativeMedicines,
      april.modifiers.network1,
    ],
  },
  {
    _id: april.plans.EliteIPOrOP,
    provider: april.providers,
    title: "Elite (IP/OP)",
    notes: "",
    benefitCategories: [
      {
        categoryTitle: "General Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.chronicConditions,
              core.benefitTypes.preExistingCoverCondition,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [core.benefitTypes.claimHandling],
          },
        ],
      },
      {
        categoryTitle: "In-patient (Hospitalization & Surgery)",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [core.benefitTypes.accomodation],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.diagnosticsAndTest,
              core.benefitTypes.organTransplant,
              core.benefitTypes.surgeriesAndAnthesia,
              core.benefitTypes.oncology,
            ],
          },
          {
            userType: Enum.userType.Starter,
            benefitTypes: [
              core.benefitTypes.inPatientHospitializationandsurgery,
            ],
          },
        ],
      },
      {
        categoryTitle:
          "Out-patient (Consultations, Lab & Diagnostics, Pharmacy, Physiotherapy)",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [core.benefitTypes.physiotherapy],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.outPatientConsultation,
              core.benefitTypes.specialist,
              core.benefitTypes.medicine,
              core.benefitTypes.vaccination,
              core.benefitTypes.tests,
            ],
          },
          {
            userType: Enum.userType.Starter,
            benefitTypes: [core.benefitTypes.outPatientBenefit],
          },
        ],
      },
      {
        categoryTitle: "Maternity",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.maternity,
              core.benefitTypes.maternityWaitingPeriod,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.complicationOfPregnancy,
              core.benefitTypes.newBornCoverage,
            ],
          },
        ],
      },
      {
        categoryTitle: "Dental Benefit",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.dental,
              core.benefitTypes.dentalWaitingPeriod,
            ],
          },
        ],
      },
      {
        categoryTitle: "Additional Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.optical,
              core.benefitTypes.wellness,
              core.benefitTypes.emergencyEvacution,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.alternativeMedicine,
              core.benefitTypes.mentalHealth,
              core.benefitTypes.memberWebPortal,
              core.benefitTypes.mobileApplication,
              core.benefitTypes.virtualTele,
              core.benefitTypes.otherServices,
            ],
          },
        ],
      },
      {
        categoryTitle: "Added (Optional) Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.extendedEvacuation,
              core.benefitTypes.nonEmergency,
            ],
          },
        ],
      },
    ],
    pricingTables: [
      april.pricingTables.EliteIPOrOP.WorldwideIncludingUSA,
      april.pricingTables.EliteIPOrOP.WorldwideExcludingUSA,
    ],
    modifiers: [
      april.modifiers.benefits.ClaimsHandling,
      april.modifiers.benefits.ChronicConditionCover,
      april.modifiers.benefits.PreExistingConditionCover,
      april.modifiers.benefits.AccommodationType,
      april.modifiers.benefits.InPatientHospitalizationAndSurgery,
      april.modifiers.benefits.DiagnosticsAndTest,
      april.modifiers.benefits.SurgeriesAndAnesthesia,
      april.modifiers.benefits.Oncology,
      april.modifiers.benefits.OrganTransplant,
      april.modifiers.benefits.OutPatientBenefits,
      april.modifiers.benefits.OutPatientConsultations,
      april.modifiers.benefits.OutPatientSpecialists,
      april.modifiers.benefits.OutPatientMedicines,
      april.modifiers.benefits.OpticalBenefits,
      april.modifiers.benefits.Vaccination,
      april.modifiers.benefits.ScansAndDiagnosticTests,
      april.modifiers.benefits.Physiotherapy,
      april.modifiers.benefits.MaternityConsultationsScansAndDelivery1,
      april.modifiers.benefits.MaternityWaitingPeriod1,
      april.modifiers.benefits.ComplicationsOfPregnancy1,
      april.modifiers.benefits.NewBornCover,
      april.modifiers.benefits.Dental1,
      april.modifiers.benefits.DentalWaitingPeriod,
      april.modifiers.benefits.WellnessAndHealthScreening,
      april.modifiers.benefits.MentalHealthBenefit,
      april.modifiers.benefits.EmergencyEvacuation,
      april.modifiers.benefits.VirtualOrTeleDoctor,
      april.modifiers.benefits.OtherServices,
      april.modifiers.benefits.MemberWebPortal,
      april.modifiers.benefits.MobileApplication,
      april.modifiers.benefits.HealthyConnect,
      april.modifiers.paymentFrequency.Annually,
      april.modifiers.deductible,
      april.modifiers.benefits.AlternativeMedicines,
      april.modifiers.network1,
    ],
  },
  {
    _id: april.plans.EliteIPOrEssentialOP,
    provider: april.providers,
    title: "Elite (IP)/ Essential (OP)",
    notes: "",
    benefitCategories: [
      {
        categoryTitle: "General Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.chronicConditions,
              core.benefitTypes.preExistingCoverCondition,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [core.benefitTypes.claimHandling],
          },
        ],
      },
      {
        categoryTitle: "In-patient (Hospitalization & Surgery)",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [core.benefitTypes.accomodation],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.diagnosticsAndTest,
              core.benefitTypes.organTransplant,
              core.benefitTypes.surgeriesAndAnthesia,
              core.benefitTypes.oncology,
            ],
          },
          {
            userType: Enum.userType.Starter,
            benefitTypes: [
              core.benefitTypes.inPatientHospitializationandsurgery,
            ],
          },
        ],
      },
      {
        categoryTitle:
          "Out-patient (Consultations, Lab & Diagnostics, Pharmacy, Physiotherapy)",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [core.benefitTypes.physiotherapy],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.outPatientConsultation,
              core.benefitTypes.specialist,
              core.benefitTypes.medicine,
              core.benefitTypes.vaccination,
              core.benefitTypes.tests,
            ],
          },
          {
            userType: Enum.userType.Starter,
            benefitTypes: [core.benefitTypes.outPatientBenefit],
          },
        ],
      },
      {
        categoryTitle: "Maternity",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.maternity,
              core.benefitTypes.maternityWaitingPeriod,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.complicationOfPregnancy,
              core.benefitTypes.newBornCoverage,
            ],
          },
        ],
      },
      {
        categoryTitle: "Dental Benefit",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.dental,
              core.benefitTypes.dentalWaitingPeriod,
            ],
          },
        ],
      },
      {
        categoryTitle: "Additional Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.optical,
              core.benefitTypes.wellness,
              core.benefitTypes.emergencyEvacution,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.alternativeMedicine,
              core.benefitTypes.mentalHealth,
              core.benefitTypes.memberWebPortal,
              core.benefitTypes.mobileApplication,
              core.benefitTypes.virtualTele,
              core.benefitTypes.otherServices,
            ],
          },
        ],
      },
      {
        categoryTitle: "Added (Optional) Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.extendedEvacuation,
              core.benefitTypes.nonEmergency,
            ],
          },
        ],
      },
    ],
    pricingTables: [
      april.pricingTables.EliteIPOrEssentialOP.WorldwideIncludingUSA,
      april.pricingTables.EliteIPOrEssentialOP.WorldwideExcludingUSA,
    ],
    modifiers: [
      april.modifiers.benefits.ClaimsHandling,
      april.modifiers.benefits.ChronicConditionCover,
      april.modifiers.benefits.PreExistingConditionCover,
      april.modifiers.benefits.AccommodationType,
      april.modifiers.benefits.InPatientHospitalizationAndSurgery,
      april.modifiers.benefits.DiagnosticsAndTest,
      april.modifiers.benefits.SurgeriesAndAnesthesia,
      april.modifiers.benefits.Oncology,
      april.modifiers.benefits.OrganTransplant,
      april.modifiers.benefits.OutPatientBenefits,
      april.modifiers.benefits.OutPatientConsultations,
      april.modifiers.benefits.OutPatientSpecialists,
      april.modifiers.benefits.OutPatientMedicines,
      april.modifiers.benefits.OpticalBenefits,
      april.modifiers.benefits.Vaccination,
      april.modifiers.benefits.ScansAndDiagnosticTests,
      april.modifiers.benefits.Physiotherapy,
      april.modifiers.benefits.MaternityConsultationsScansAndDelivery1,
      april.modifiers.benefits.MaternityWaitingPeriod1,
      april.modifiers.benefits.ComplicationsOfPregnancy1,
      april.modifiers.benefits.NewBornCover,
      april.modifiers.benefits.Dental1,
      april.modifiers.benefits.DentalWaitingPeriod,
      april.modifiers.benefits.WellnessAndHealthScreening,
      april.modifiers.benefits.MentalHealthBenefit,
      april.modifiers.benefits.EmergencyEvacuation,
      april.modifiers.benefits.VirtualOrTeleDoctor,
      april.modifiers.benefits.OtherServices,
      april.modifiers.benefits.MemberWebPortal,
      april.modifiers.benefits.MobileApplication,
      april.modifiers.benefits.HealthyConnect,
      april.modifiers.paymentFrequency.Annually,
      april.modifiers.deductible,
      april.modifiers.benefits.AlternativeMedicines,
      april.modifiers.network1,
    ],
  },
  {
    _id: april.plans.EliteIPOrExtensiveOP,
    provider: april.providers,
    title: "Elite (IP)/ Extensive(OP)",
    notes: "",
    benefitCategories: [
      {
        categoryTitle: "General Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.chronicConditions,
              core.benefitTypes.preExistingCoverCondition,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [core.benefitTypes.claimHandling],
          },
        ],
      },
      {
        categoryTitle: "In-patient (Hospitalization & Surgery)",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [core.benefitTypes.accomodation],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.diagnosticsAndTest,
              core.benefitTypes.organTransplant,
              core.benefitTypes.surgeriesAndAnthesia,
              core.benefitTypes.oncology,
            ],
          },
          {
            userType: Enum.userType.Starter,
            benefitTypes: [
              core.benefitTypes.inPatientHospitializationandsurgery,
            ],
          },
        ],
      },
      {
        categoryTitle:
          "Out-patient (Consultations, Lab & Diagnostics, Pharmacy, Physiotherapy)",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [core.benefitTypes.physiotherapy],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.outPatientConsultation,
              core.benefitTypes.specialist,
              core.benefitTypes.medicine,
              core.benefitTypes.vaccination,
              core.benefitTypes.tests,
            ],
          },
          {
            userType: Enum.userType.Starter,
            benefitTypes: [core.benefitTypes.outPatientBenefit],
          },
        ],
      },
      {
        categoryTitle: "Maternity",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.maternity,
              core.benefitTypes.maternityWaitingPeriod,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.complicationOfPregnancy,
              core.benefitTypes.newBornCoverage,
            ],
          },
        ],
      },
      {
        categoryTitle: "Dental Benefit",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.dental,
              core.benefitTypes.dentalWaitingPeriod,
            ],
          },
        ],
      },
      {
        categoryTitle: "Additional Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.optical,
              core.benefitTypes.wellness,
              core.benefitTypes.emergencyEvacution,
            ],
          },
          {
            userType: Enum.userType.Pro,
            benefitTypes: [
              core.benefitTypes.alternativeMedicine,
              core.benefitTypes.mentalHealth,
              core.benefitTypes.memberWebPortal,
              core.benefitTypes.mobileApplication,
              core.benefitTypes.virtualTele,
              core.benefitTypes.otherServices,
            ],
          },
        ],
      },
      {
        categoryTitle: "Added (Optional) Benefits",
        includedBenefits: [
          {
            userType: Enum.userType.All,
            benefitTypes: [
              core.benefitTypes.extendedEvacuation,
              core.benefitTypes.nonEmergency,
            ],
          },
        ],
      },
    ],
    pricingTables: [
      april.pricingTables.EliteIPOrExtensiveOP.WorldwideIncludingUSA,
      april.pricingTables.EliteIPOrExtensiveOP.WorldwideExcludingUSA,
    ],
    modifiers: [
      april.modifiers.benefits.ClaimsHandling,
      april.modifiers.benefits.ChronicConditionCover,
      april.modifiers.benefits.PreExistingConditionCover,
      april.modifiers.benefits.AccommodationType,
      april.modifiers.benefits.InPatientHospitalizationAndSurgery,
      april.modifiers.benefits.DiagnosticsAndTest,
      april.modifiers.benefits.SurgeriesAndAnesthesia,
      april.modifiers.benefits.Oncology,
      april.modifiers.benefits.OrganTransplant,
      april.modifiers.benefits.OutPatientBenefits,
      april.modifiers.benefits.OutPatientConsultations,
      april.modifiers.benefits.OutPatientSpecialists,
      april.modifiers.benefits.OutPatientMedicines,
      april.modifiers.benefits.OpticalBenefits,
      april.modifiers.benefits.Vaccination,
      april.modifiers.benefits.ScansAndDiagnosticTests,
      april.modifiers.benefits.Physiotherapy,
      april.modifiers.benefits.MaternityConsultationsScansAndDelivery1,
      april.modifiers.benefits.MaternityWaitingPeriod1,
      april.modifiers.benefits.ComplicationsOfPregnancy1,
      april.modifiers.benefits.NewBornCover,
      april.modifiers.benefits.Dental1,
      april.modifiers.benefits.DentalWaitingPeriod,
      april.modifiers.benefits.WellnessAndHealthScreening,
      april.modifiers.benefits.MentalHealthBenefit,
      april.modifiers.benefits.EmergencyEvacuation,
      april.modifiers.benefits.VirtualOrTeleDoctor,
      april.modifiers.benefits.OtherServices,
      april.modifiers.benefits.MemberWebPortal,
      april.modifiers.benefits.MobileApplication,
      april.modifiers.benefits.HealthyConnect,
      april.modifiers.paymentFrequency.Annually,
      april.modifiers.deductible,
      april.modifiers.benefits.AlternativeMedicines,
      april.modifiers.network1,
    ],
  },
];
module.exports = plans;
