import mail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

// Create an api key in sendgrid and store someplace safe
mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY || '');
type ResponseData = {
  status?: string;
  message?: string;
};

export async function POST(request: Request) {
  let response: ResponseData = {};
  const body = await request.json();
console.log(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)
console.log(body, 'fvffvfvfvfv')
  const message = `
    Name: ${body.user.name}\r\n
    Email: ${body.user.email}\r\n
    Phone: ${body.user.phone}\r\n
    Message: ${body.message}
    Products: ${body.products}
  `;
  const data = {
    to: `mendozakamin@gmail.com`,
    from: 'serezha.kaminskiy.01@gmail.com',
    subject: 'Order store',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  };
  console.log(data)

  await mail
    .send(data)
    .then(() => {
      response = {
        status: 'success',
        message: "Your order has been successfully placed. Please wait for a manager to contact you!!!",
      };
    })
    .catch((error) => {
      response = {
        status: 'error',
        message: `Message failed to send with error, ${error}`,
      };
    });

  return NextResponse.json(response);
}