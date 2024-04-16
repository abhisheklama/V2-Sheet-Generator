
        const Provider = require('./provider/index');
        const Plans = require('./plans/index');
        const PricingTables = require('./PricingTable/index');
        const Coverages = require('./coverage/index');
        const Modifiers = require('./modifiers/index');
        let data = [
          // Provider data
          {
            model: "Provider",
            modelPath: "models/provider-model.js",
            documents: Provider,
          },

          // Plans
          {
            model: "Plan",
            modelPath: "models/plan-model.js",
            documents: Plans,
          },

          // Pricing Tables
          {
            model: "PricingTable",
            modelPath: "models/pricing-table-model.js",
            documents: PricingTables,
          },

          // Coverage information
          {
            model: "Coverage",
            modelPath: "models/coverage-model.js",
            documents: Coverages,
          },

          {
            // Plan modifiers
            model: "Modifier",
            modelPath: "models/modifier-model.js",
            documents: Modifiers,
          },
        ];

        module.exports = data