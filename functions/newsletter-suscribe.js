const fetch = require('node-fetch');

exports.handler = async (event) => {
  // Netlify envoie les données du formulaire en POST
  const data = JSON.parse(event.body).payload.data;

  if (!data.email) {
    return { statusCode: 400, body: "Missing: email" };
  }

  const BREVO_API_KEY = process.env.BREVO_API_KEY;

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify({
        email: data.email,
        attributes: {
          ACQUISITION_SOURCE: "mieuxvoter.fr - Newsletter", 
        },
        listIds: [3], 
        updateEnabled: true
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { statusCode: response.status, body: JSON.stringify(errorData) };
    }

    return { statusCode: 200, body: "Contact ajouté avec succès !" };
  } catch (error) {
    return { statusCode: 500, body: error.message };
  }
};