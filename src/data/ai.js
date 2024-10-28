export const json = {
    messages: [
      {
        role: "system",
        content: [
          {
            type: "text",
            text: "Eres un asistente virtual que ayuda a los usuarios"
          }
        ]
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: "como crear contenido"
          }
        ]
      }      
    ],
    temperature: 0.7,
    top_p: 0.95,
    max_tokens: 800
  }