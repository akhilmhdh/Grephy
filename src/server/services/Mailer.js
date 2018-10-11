import sendgrid from 'sendgrid';
const helper=sendgrid.mail;

class Mailer extends helper.Mail{
    constructor({email,name},content){
        super();

        this.sgApi=sendgrid(process.env.SENDGRID_SEC)

        this.from_email=new helper.Email('no-reply@grephy.com');
        this.subject=`Grephy:${name} Notification`;
        this.body=new helper.Content('text/html',content);
        this.recipients=new helper.Email(email);
        
        const personalise=new helper.Personalization();
        personalise.addTo(this.recipients);
        this.addPersonalization(personalise);
        
        this.addContent(this.body);
    }
    async send(){
        const req=this.sgApi.emptyRequest({
            method:'POST',
            path:'/v3/mail/send',
            body: this.toJSON()
        });

        const res=this.sgApi.API(req);
        return res;
    }
}

export default Mailer;



