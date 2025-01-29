import { IconExternalLink } from "@tabler/icons-react";

export default function RosettaPage(){
    return (
        <div style={{ height: "80vh" }}>
            <iframe 
                src="https://docs.google.com/document/d/1TapndFWBp6CsGXHSd4VBmr0LTx1EaxUc/edit"
                width={"100%"} 
                height={"100%"}/>
            <a 
                href="https://docs.google.com/document/d/1TapndFWBp6CsGXHSd4VBmr0LTx1EaxUc/edit"
                target='_blank'
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}>
                <IconExternalLink/> Open in new tab
            </a>
        </div>
    )
}