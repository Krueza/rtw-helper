import { IconExternalLink } from "@tabler/icons-react";

export default function RosettaPage(){
    return (
        <div style={{ height: "80vh" }}>
        <iframe 
            src="https://gamers-hq.de/media/pdf/a0/09/50/Total_War_Rome_-_The_Rules_-_FINAL_RULES__-_29-02-24.pdf"
            width={"100%"} 
            height={"100%"}/>
        <a 
            href="https://gamers-hq.de/media/pdf/a0/09/50/Total_War_Rome_-_The_Rules_-_FINAL_RULES__-_29-02-24.pdf"
            target='_blank'
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
            <IconExternalLink/> Open in new tab
        </a>
        </div>
    )
}