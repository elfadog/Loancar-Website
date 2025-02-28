import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState(null);

  const openQ = (id) => {
    setActiveQ(activeQ === id ? null : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-content">
          <div className="faq-content__title">
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="all-questions">
            <div className="faq-box">
              <div
                id="q1"
                onClick={() => openQ("q1")}
                className={`faq-box__question  ${getClassQuestion("q1")}`}
              >
                <p>1. Who will pay for the replacement vehicle?</p>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <div
                id="q1"
                onClick={() => openQ("q1")}
                className={`faq-box__answer ${getClassAnswer("q1")}`}
                style={{
                  maxHeight: activeQ === "q1" ? "fit-content" : "0",
                  overflowY: "auto",
                  transition: "max-height 0.3s ease-out",
                }}
              >
                <ul>
                  <li>
                    <strong>If you are the innocent party:</strong> LoanCar will
                    be paid the replacement vehicle charges by the insurance
                    company of the driver who caused the accident. There will be
                    absolutely no cost to you*. Terms & Conditions apply.
                  </li>
                  <li>
                    <strong>
                      If you are at fault in the accident and have replacement
                      vehicle cover in your insurance policy:
                    </strong>{" "}
                    We can usually recover all of the costs from your insurance
                    company on your behalf. We will need a copy of your
                    insurance policy.
                  </li>
                  <li>
                    <strong>
                      If you are at fault in the accident and do NOT have
                      replacement vehicle cover in your policy:
                    </strong>{" "}
                    You can rent a car from us at our competitive rates.
                  </li>
                </ul>
              </div>
            </div>
            <div className="faq-box">
              <div
                id="q2"
                onClick={() => openQ("q2")}
                className={`faq-box__question  ${getClassQuestion("q2")}`}
              >
                <p>2. How soon can I get a replacement vehicle?</p>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <div
                id="q2"
                onClick={() => openQ("q2")}
                className={`faq-box__answer ${getClassAnswer("q2")}`}
                style={{
                  maxHeight: activeQ === "q2" ? "fit-content" : "0",
                  overflowY: "auto",
                  transition: "max-height 0.3s ease-out",
                }}
              >
                <p>
                  If your claim is approved by LoanCar, you can receive a
                  replacement when your vehicle is being admitted to your smash
                  repair shop or if it is not drivable, you can receive it
                  straight away. Usually approval can be given within minutes
                  once we are given the required information, however in some
                  cases where liability is in doubt approval can take longer.
                </p>
              </div>
            </div>
            <div className="faq-box">
              <div
                id="q3"
                onClick={() => openQ("q3")}
                className={`faq-box__question  ${getClassQuestion("q3")}`}
              >
                <p>3. What type of vehicle will I get?</p>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <div
                id="q3"
                onClick={() => openQ("q3")}
                className={`faq-box__answer ${getClassAnswer("q3")}`}
                style={{
                  maxHeight: activeQ === "q3" ? "fit-content" : "0",
                  overflowY: "auto",
                  transition: "max-height 0.3s ease-out",
                }}
              >
                <p>
                  LoanCar always strives to minimize hire costs for the
                  insurance industry, so we aim to offer small cars whenever
                  possible. However, we maintain a diverse fleet of vehicles and
                  can provide like-for-like or equivalent replacements if
                  necessary.
                </p>
              </div>
            </div>
            <div className="faq-box">
              <div
                id="q4"
                onClick={() => openQ("q4")}
                className={`faq-box__question  ${getClassQuestion("q4")}`}
              >
                <p>4. How long can I keep the replacement vehicle?</p>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <div
                id="q4"
                onClick={() => openQ("q4")}
                className={`faq-box__answer ${getClassAnswer("q4")}`}
                style={{
                  maxHeight: activeQ === "q4" ? "fit-content" : "0",
                  overflowY: "auto",
                  transition: "max-height 0.3s ease-out",
                }}
              >
                <ul>
                  <li>
                    If your vehicle is repairable, in most cases you can keep
                    our vehicle for the duration of the repair.
                  </li>
                  <li>
                    If your vehicle is a total loss and you are claiming through
                    the at-fault party’s insurance company, you may keep the
                    replacement vehicle until your settlement cheque has been
                    received, or until the insurance company notifies LoanCar
                    that settlement has been made. We will give you as much
                    notice as possible once we receive instructions from the
                    insurance company.
                  </li>
                  <li>
                    • If your vehicle is a total loss and you are claiming
                    settlement from <i>your own Insurance company</i>, how long
                    you can keep the replacement vehicle will be determined by
                    the terms of your policy wording. (note the italics)
                  </li>
                </ul>
              </div>
            </div>
            <div className="faq-box">
              <div
                id="q5"
                onClick={() => openQ("q5")}
                className={`faq-box__question  ${getClassQuestion("q5")}`}
              >
                <p>5. Will the replacement vehicle be insured?</p>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <div
                id="q5"
                onClick={() => openQ("q5")}
                className={`faq-box__answer ${getClassAnswer("q5")}`}
                style={{
                  maxHeight: activeQ === "q5" ? "fit-content" : "0",
                  overflowY: "auto",
                  transition: "max-height 0.3s ease-out",
                }}
              >
                <p>
                  Yes, the replacement vehicle will be fully insured. The
                  standard excess is $3000. However, LoanCar vehicles delivered
                  to you will be subject to your standard policy excess,
                  whatever that may be. Excess reduction costs will be billed to
                  the at-fault insurer.
                </p>
              </div>
            </div>
            <div className="faq-box">
              <div
                id="q6"
                onClick={() => openQ("q6")}
                className={`faq-box__question  ${getClassQuestion("q6")}`}
              >
                <p>6. Will I need a credit card or a deposit?</p>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <div
                id="q6"
                onClick={() => openQ("q6")}
                className={`faq-box__answer ${getClassAnswer("q6")}`}
                style={{
                  maxHeight: activeQ === "q6" ? "fit-content" : "0",
                  overflowY: "auto",
                  transition: "max-height 0.3s ease-out",
                }}
              >
                <p>
                  No deposit is required. However, we require your credit card
                  details. This is because we reserve the right to on-charge you
                  for any infringement costs, speeding costs or excess which may
                  be applicable in the event of an unfortunate accident.
                </p>
              </div>
            </div>
            <div className="faq-box">
              <div
                id="q7"
                onClick={() => openQ("q7")}
                className={`faq-box__question  ${getClassQuestion("q7")}`}
              >
                <p>7. What are the age restrictions to hire from LoanCar?</p>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <div
                id="q7"
                onClick={() => openQ("q7")}
                className={`faq-box__answer ${getClassAnswer("q7")}`}
                style={{
                  maxHeight: activeQ === "q7" ? "fit-content" : "0",
                  overflowY: "auto",
                  transition: "max-height 0.3s ease-out",
                }}
              >
                <p>
                  To drive a LoanCar vehicle you must be at least 18 years of
                  age.
                </p>
              </div>
            </div>
            <div className="faq-box">
              <div
                id="q8"
                onClick={() => openQ("q8")}
                className={`faq-box__question  ${getClassQuestion("q8")}`}
              >
                <p>
                  8. What are the licence restrictions to hire from LoanCar?
                </p>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <div
                id="q8"
                onClick={() => openQ("q8")}
                className={`faq-box__answer ${getClassAnswer("q8")}`}
                style={{
                  maxHeight: activeQ === "q8" ? "fit-content" : "0",
                  overflowY: "auto",
                  transition: "max-height 0.3s ease-out",
                }}
              >
                <p>
                  To drive a LoanCar vehicle you must have at least a Restricted
                  licence or equivalent overseas licence. A Learner’s licence is
                  not accepted.
                </p>
              </div>
            </div>
            <div className="faq-box">
              <div
                id="q9"
                onClick={() => openQ("q9")}
                className={`faq-box__question  ${getClassQuestion("q9")}`}
              >
                <p>
                  9. Does my car need to be insured to receive an LoanCar
                  replacement vehicle?
                </p>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <div
                id="q9"
                onClick={() => openQ("q9")}
                className={`faq-box__answer ${getClassAnswer("q9")}`}
                style={{
                  maxHeight: activeQ === "q9" ? "fit-content" : "0",
                  overflowY: "auto",
                  transition: "max-height 0.3s ease-out",
                }}
              >
                <li>
                  If you are not at fault in the accident – No. All costs are
                  claimed from the insurance company of the at fault driver so
                  you do not need to have your own insurance policy.
                </li>
                <li>
                  If you are at fault in the accident – Yes, you will need to
                  have an insurance policy that covers you for a replacement
                  vehicle after an accident. Usually LoanCar can claim the full
                  cost of the replacement vehicle from your insurance company
                  directly without you needing to pay us for it first or paying
                  any extras. It depends on your insurance company and policy
                  conditions.
                </li>
              </div>
            </div>
            <div className="faq-box">
              <div
                id="q10"
                onClick={() => openQ("q10")}
                className={`faq-box__question  ${getClassQuestion("q10")}`}
              >
                <p>
                  10. What if an insurance company representative tries to turn
                  me off using LoanCar?
                </p>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <div
                id="q10"
                onClick={() => openQ("q10")}
                className={`faq-box__answer ${getClassAnswer("q10")}`}
                style={{
                  maxHeight: activeQ === "q10" ? "fit-content" : "0",
                  overflowY: "auto",
                  transition: "max-height 0.3s ease-out",
                }}
              >
                <p>
                  LoanCar have great relationships with most Insurance
                  companies. If you encounter an insurance company
                  representative who discourages you from using our service,
                  please be aware that they may be misinformed. Their views may
                  not reflect those of the insurance company as a whole. If you
                  have any concerns, please feel free to contact us.
                </p>
              </div>
            </div>
            <div className="faq-box">
              <div
                id="q11"
                onClick={() => openQ("q11")}
                className={`faq-box__question  ${getClassQuestion("q11")}`}
              >
                <p>11. Can additional drivers drive the replacement vehicle?</p>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <div
                id="q11"
                onClick={() => openQ("q11")}
                className={`faq-box__answer ${getClassAnswer("q11")}`}
                style={{
                  maxHeight: activeQ === "q11" ? "fit-content" : "0",
                  overflowY: "auto",
                  transition: "max-height 0.3s ease-out",
                }}
              >
                <p>
                  Yes, anybody can drive the replacement vehicle at no extra
                  cost as long as they meet the age and driving licence
                  requirements, just like your own car! It is the renter’s
                  responsibility to ensure any other drivers meet the age and
                  licence restrictions.
                </p>
              </div>
            </div>
            <div className="faq-box">
              <div
                id="q12"
                onClick={() => openQ("q12")}
                className={`faq-box__question  ${getClassQuestion("q12")}`}
              >
                <p>
                  12. What should I do if my vehicle is not legally drivable or
                  off the road already?
                </p>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <div
                id="q12"
                onClick={() => openQ("q12")}
                className={`faq-box__answer ${getClassAnswer("q12")}`}
                style={{
                  maxHeight: activeQ === "q12" ? "fit-content" : "0",
                  overflowY: "auto",
                  transition: "max-height 0.3s ease-out",
                }}
              >
                <p>
                  Call LoanCar on 027 LOAN CAR (027 5626 227) to check your
                  eligibility for an immediate replacement. We can also offer
                  advice on many other aspects of the insurance, repair and
                  injury compensation processes if required.
                </p>
              </div>
            </div>
            <div className="faq-box">
              <div
                id="q13"
                onClick={() => openQ("q13")}
                className={`faq-box__question  ${getClassQuestion("q13")}`}
              >
                <p>
                  13. How do I know if my vehicle is legally drivable or should
                  not be on the road?
                </p>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <div
                id="q13"
                onClick={() => openQ("q13")}
                className={`faq-box__answer ${getClassAnswer("q13")}`}
                style={{
                  maxHeight: activeQ === "q13" ? "fit-content" : "0",
                  overflowY: "auto",
                  transition: "max-height 0.3s ease-out",
                }}
              >
                <ul>
                  <li>
                    Your vehicle may not be legally drivable and should not be
                    on the road if:
                  </li>
                  <ul>
                    <li>Your doors, boot, or bonnet will not open or close.</li>
                    <li>There are any exhaust gasses entering the car.</li>
                    <li>You cannot lock your car.</li>
                    <li>Any windows are smashed.</li>
                    <li>
                      Your exterior lights/indicators do not work or are broken.
                    </li>
                    <li>Your mirrors are broken.</li>
                    <li>Your wheels are rubbing on the body of your car.</li>
                    <li>There are any leaks from your car.</li>
                    <li>There is any smoke or steam coming from your car.</li>
                  </ul>
                </ul>
                <p>
                  Please contact LoanCar or a qualified panel beater / repair
                  shop if you are still unsure.
                </p>
              </div>
            </div>
            <div className="faq-box">
              <div
                id="q14"
                onClick={() => openQ("q14")}
                className={`faq-box__question  ${getClassQuestion("q14")}`}
              >
                <p>
                  14. Does the vehicle need to be used for business for me to be
                  eligible?
                </p>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <div
                id="q14"
                onClick={() => openQ("q14")}
                className={`faq-box__answer ${getClassAnswer("q14")}`}
                style={{
                  maxHeight: activeQ === "q14" ? "fit-content" : "0",
                  overflowY: "auto",
                  transition: "max-height 0.3s ease-out",
                }}
              >
                <p>
                  No. Anyone who has lost the use of their vehicle due to a
                  non-fault accident is eligible.
                </p>
              </div>
            </div>
            <div className="faq-box">
              <div
                id="q15"
                onClick={() => openQ("q15")}
                className={`faq-box__question  ${getClassQuestion("q15")}`}
              >
                <p>
                  15. Are there any restrictions on kilometres travelled in the
                  hire car?
                </p>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <div
                id="q15"
                onClick={() => openQ("q15")}
                className={`faq-box__answer ${getClassAnswer("q15")}`}
                style={{
                  maxHeight: activeQ === "q15" ? "fit-content" : "0",
                  overflowY: "auto",
                  transition: "max-height 0.3s ease-out",
                }}
              >
                <p>
                  There are no mileage restrictions in LoanCar vehicles, just
                  like in your own car.
                </p>
              </div>
            </div>
            <div className="faq-box">
              <div
                id="q16"
                onClick={() => openQ("q16")}
                className={`faq-box__question  ${getClassQuestion("q16")}`}
              >
                <p>
                  16. What should I do if I have an accident in the replacement
                  vehicle?
                </p>
                <i className="fa-solid fa-angle-down"></i>
              </div>
              <div
                id="q16"
                onClick={() => openQ("q16")}
                className={`faq-box__answer ${getClassAnswer("q16")}`}
                style={{
                  maxHeight: activeQ === "q16" ? "fit-content" : "0",
                  overflowY: "auto",
                  transition: "max-height 0.3s ease-out",
                }}
              >
                <p>
                  Please call LoanCar on 027 LOAN CAR (027 5626 227) as soon as
                  possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
