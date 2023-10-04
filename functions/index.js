const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.enviarNotificacao = functions.https.onCall(async (data, context) => {
  const { token, mensagem } = data;

  await admin
    .messaging()
    .send({ data: { mensagem }, token })
    .then(() => ({ sucesso: true }))
    .catch((error) => ({ erro: 'Erro ao enviar notificação: ' + error }))
});