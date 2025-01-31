import { IconExternalLink } from "@tabler/icons-react";

export default function RuleView({link}: {link: string}){
    return (
        <div style={{ height: "80vh" }}>
            <iframe 
                src={link}
                width={"100%"} 
                height={"100%"}/>
            <a 
                href={link}
                target='_blank'
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
                <IconExternalLink/> Open in new tab
            </a>
        </div>
    );
}