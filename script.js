const form = document.getElementById("askForm");
const responseText = document.getElementById("responseText");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const questionInput = document.getElementById("question");

    const name = nameInput.value.trim() || "there";
    const question = questionInput.value.trim();

    if (!question) {
      responseText.textContent =
        "Please add your question so the manager can provide a helpful reply.";
      responseText.classList.add("highlight-response");
      setTimeout(() => responseText.classList.remove("highlight-response"), 600);
      return;
    }

    const shortPreview =
      question.length > 80 ? question.slice(0, 80) + "..." : question;

    responseText.innerHTML =
      "<strong>Manager:</strong> Hi " +
      name +
      ", thank you for reaching out and for your question: “" +
      shortPreview +
      "”.<br><br>" +
      "Our team will review the details and match you with the right combination of health-focused sanitation, eco-smart landscaping or IT services for your space. " +
      "For faster follow-up, please also send this question to <a href='mailto:bemibrightwork@gmail.com'>bemibrightwork@gmail.com</a> so we can respond with schedule options and a tailored quote.";

    responseText.classList.add("response-pop");
    setTimeout(() => responseText.classList.remove("response-pop"), 500);

    form.reset();
  });
}

/* Extra subtle animation for response highlight */
const style = document.createElement("style");
style.textContent = `
  .highlight-response {
    color: #f97316 !important;
  }
  .response-pop {
    animation: responsePop 0.45s ease-out;
  }
  @keyframes responsePop {
    0% { transform: scale(0.96); opacity: 0.5; }
    60% { transform: scale(1.02); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }
`;
document.head.appendChild(style);
