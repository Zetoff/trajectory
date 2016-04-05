ServiceConfiguration.configurations.upsert(
  { service: "github" },
  {
    $set: {
      clientId: "0b345cc801cc3a645f9a",
      loginStyle: "popup",
      secret: "390147250c3b47156f6eef5e75f761c9538a219b"
    }
  }
);

ServiceConfiguration.configurations.upsert(
  { service: "meteor-developer" },
  {
    $set: {
      clientId: "ER3wHYCupAJrzJezp",
      loginStyle: "popup",
      secret: "xJwSoeMKBxRyd257wMs2wQ8RmNmKorfSLw"
    }
  }
);
