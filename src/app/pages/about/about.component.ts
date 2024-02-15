import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  what_we_provide = [
    { title: "Website Verification", content: "We can help you verify the authenticity of websites and ensure that they meet your standards for quality and security." },
    { title: "Email Verification", content: "Our email verification services can help you improve your email deliverability and increase your open and click-through rates." },
    { title: "Phone Verification", content: "We can verify phone numbers to help you reach your target audience more effectively." },
    { title: "Address Verification", content: "Our address verification services can help you ensure that your mailing lists are accurate and up-to-date." },
    { title: "Email Append", content: "We can help you add missing email addresses to your database, so you can reach more customers and prospects." },
    { title: "Technology Append", content: "Our technology append services can help you identify the technology platforms that your customers and prospects are using, so you can tailor your marketing efforts accordingly." },
    { title: "Title Append", content: "We can help you identify the job titles of your contacts, so you can personalize your messaging and increase your response rates." },
    { title: "Industry Append", content: "Our industry append services can help you identify the industries in which your customers and prospects operate, so you can tailor your messaging and offers accordingly." },
    { title: "Revenue Append", content: "We can help you identify the revenue range of your customers and prospects, so you can better understand their purchasing power and tailor your offerings accordingly." },
    { title: "Address Append", content: "Our address append services can help you add missing addresses to your database, so you can better target your direct mail campaigns." },
    { title: "Lead Generation", content: "We can help you generate high-quality leads that are more likely to convert into customers." },
    { title: "Tele-Prospecting", content: "Our tele-prospecting services can help you reach out to prospects and generate new business opportunities." },
    { title: "Appointment Setting Process", content: "We can help you schedule appointments with qualified leads, so you can focus on closing deals." },
    { title: "Lead Nurturing", content: "Our lead nurturing services can help you build relationships with your prospects and move them through the sales funnel." },
    { title: "Account Profiling", content: "We can help you create detailed profiles of your target accounts, so you can tailor your messaging and offers accordingly." },
    { title: "Market Intelligence", content: "Our market intelligence services can help you stay ahead of the competition by providing you with valuable insights into industry trends and customer behavior." },
    { title: "Whitepaper Syndication", content: "We can help you promote your whitepapers to a targeted audience, so you can generate more leads and establish yourself as a thought leader in your industry." },
    { title: "Event Promotions", content: "We can help you promote your events to a targeted audience, so you can increase attendance and generate more leads." }
  ];

}
