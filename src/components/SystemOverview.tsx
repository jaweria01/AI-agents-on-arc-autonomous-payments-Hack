/**
 * SystemOverview
 * ----------------
 * Explains the purpose and working of the system.
 * This is an informational component for clarity and evaluation.
 */
/**
 * SystemOverview
 * ----------------
 * Academic description of the system's purpose, operation,
 * and future extensibility.
 */
const SystemOverview = () => {
  return (
    <div className="card">
      <h2>System Overview</h2>

      <p>
        The <strong>Autonomous AI Payment Ecosystem</strong> is an educational
        prototype developed to explore agent-based automation in conditional
        payment workflows. The system demonstrates how modular software agents
        can coordinate payment-related tasks in a structured and transparent
        manner within a simulated environment.
      </p>

      <p>
        In this context, the term <em>autonomous</em> refers to workflow-level
        autonomy, where the system independently executes a predefined sequence
        of actions once initiated by the user, without requiring manual
        intervention at intermediate stages. This autonomy is architectural in
        nature rather than cognitive, emphasizing reliable process execution
        over intelligent decision-making.
      </p>

      <p>
        The system models a scenario in which payments are executed only after
        predefined conditions are satisfied. Instead of relying on real
        blockchain transactions or self-learning AI models, the current
        prototype employs rule-driven agents to ensure explainability,
        correctness, and ease of evaluation.
      </p>

      <p>
        At the same time, the system is intentionally designed as an extensible
        foundation. The underlying agent-based architecture can be adapted in
        future work to support blockchain-backed payment settlement mechanisms
        or learning-based agent behavior, while preserving the same orchestration
        and transparency principles demonstrated in this prototype.
      </p>

      <p>
        Workflow coordination is handled through an orchestration layer inspired
        by Arc-style agent execution models. Each agent operates with a clearly
        defined responsibility, contributing to a sequential and observable
        execution pipeline:
      </p>

      <ul>
        <li>
          <strong>Verifier Agent:</strong> Evaluates whether the specified
          condition meets predefined validation criteria.
        </li>
        <li>
          <strong>Payment Agent:</strong> Executes the payment operation in a
          simulated manner following successful verification.
        </li>
        <li>
          <strong>Monitor Agent:</strong> Records and presents execution logs to
          provide visibility into agent actions and workflow progression.
        </li>
      </ul>

      <p>
        This project was developed for educational and hackathon purposes, with
        a focus on system design principles, agent-based architecture, and
        frontend-driven visualization of automated workflows. It prioritizes
        clarity, ethical representation of capabilities, and alignment between
        implementation and technical claims.
      </p>
    </div>
  );
};

export default SystemOverview;

