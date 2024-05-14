import { PublishCommand, SNSClient } from "@aws-sdk/client-sns";

const snsClient = new SNSClient({ region: process.env.AWS_REGION });

export default async function sendSMS(message, topic) {
	try {
	  console.log(topic)
	  const command = new PublishCommand({
		Message: "Vamos ver se agora vaaaai com subscriptionssssssssssssssssssssss!",
		TopicArn: 'arn:aws:sns:us-east-1:719157794449:TopicTestNode'
	  });
  
	// Enviando a mensagem SMS
	const response = await snsClient.send(command);
	console.log('Message sent successfully:', response);
	} catch (error) {
	  console.error('Error sending message:', error);
	}
};