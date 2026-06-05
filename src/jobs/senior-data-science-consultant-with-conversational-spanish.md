---
title: Senior Data Science Consultant (with conversational Spanish)
location: Ukraine/Europe
---


**Role Type:** Contract / Fixed-Scope Consulting Engagement\
**Duration:** 2–3 months (10–12 weeks)\
**Allocation:** Full-time or near full-time (4–5 days/week preferred)\
**Location:** Remote (Must overlap with Spain / CET ± 6 hours)\
**Languages Required:** Spanish (C1+) and English (B2+)

**The Opportunity**

We are looking for a hands-on **Senior Data Science / Analytics Engineering Consultant** to audit, redesign, and rebuild our core **chargeback estimation** and **revenue estimation** models.

This is a critical, end-to-end project. You will turn existing prototypes into production-grade pipelines within our modern data stack (**dbt on Databricks & Python**). Additionally, you will design and build a lightweight, business-facing scenario tool that enables finance and operations stakeholders to run “what-if” revenue simulations.

**Our Technical Philosophy: Parsimony Over Black Boxes**

We explicitly favor simple, highly interpretable, parametric approaches. If your first instinct for a forecasting problem is to throw an XGBoost ensemble, a deep learning model, or an LLM at it, **this is not the project for you**.

We build models where every parameter carries an explicit business meaning that can be explained to non-technical stakeholders in plain language (e.g., *“If price increases by 10%, conversion drops by X% because our calculated price elasticity is −1.3”*).

**Scope of Work & Deliverables**

* **Phase 1: Discovery & Audit (Weeks 1–2):** Review current estimation models (assumptions, dbt lineage, validation methods). Reconcile historical model outputs against actual accounting figures for the last 12–24 months to quantify bias and error. Deliver a written findings report.
* **Phase 2: Redesign (Weeks 3–4):** Propose the target parametric methodology for each model (granularity, refresh cadence, uncertainty quantification) and secure stakeholder sign-off.
* **Phase 3: Rebuild (Weeks 5–9):** Productionize the new models in dbt, Databricks, and Python. Use curve-based formulations with fitted historical parameters and clear confidence intervals. Implement strict unit/dbt testing and MLflow tracking.
* **Phase 4: Scenario Tool (Weeks 9–10):** Build a lightweight business interface (e.g., Streamlit on Databricks or a parameterized Databricks SQL dashboard). Users must be able to input hypotheses (price ±X%, volume ±Y%, mix shifts) and instantly view projected net impact with uncertainty bands.
* **Phase 5: Handover (Weeks 11–12):** Conduct knowledge transfer sessions, deliver runbooks/model cards, and provide a 2-week post-handover bug-fix support window.

**Your Profile**

* **Experience:** 5–8+ years in Data Science, Quant Analytics, or Senior Analytics Engineering.
* **Production Ownership:** Proven track record of owning financial-estimation or forecasting models in production end-to-end.
* **The “Parsimony” Mindset:** Demonstrable expertise in parametric/curve-based modeling (price elasticity, cohort survival curves, demand curves, GLMs) over black-box ML.
* **Stakeholder Tooling:** Experience building clean “what-if” tools or financial planning interfaces for business leadership.
* **The Stack:** Advanced Python (`pandas`, `numpy`, `scikit-learn`, `statsmodels`, and/or `scipy.optimize`), production `dbt` (incremental models, snapshots, tests), and `Databricks` (`PySpark`, `Delta`, workflows).
* **Domain Knowledge:** Direct experience in payment risk, chargebacks, refund/dispute modeling, revenue forecasting, cohort LTV, or pricing analytics.
* **Communication:** Exceptional ability to cross-reference data science outputs with strict financial accounting figures.
* **Languages:** **Spanish (C1+)** is mandatory for daily synchronization with local finance/ops teams; **English (B2+)** is required for technical documentation.

**Nice to Have**

* Background in FinTech, subscription models, payments, or high-volume e-commerce.
* Deep familiarity with Unity Catalog, Databricks Workflows, or Airflow.
* A strong track record of successful independent consulting engagements (references requested).