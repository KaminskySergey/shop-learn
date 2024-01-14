import sgMail, { MailDataRequired } from '@sendgrid/mail'
const sendApiKey = process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string
sgMail.setApiKey(sendApiKey)

export const sendEmail = async (message: MailDataRequired) => {
    try {
        await sgMail.send(message)
    } catch (error) {
        console.error('Error email', error)
    }
}