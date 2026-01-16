import Image from "next/image";
import Box from "./box";
import Typography from "./typography";
import Link from "next/link";

export default function Footerbar(){
    return(
        <footer className="pt-[5rem] sm:pt-[20rem]">
            <div className="bg-pink-950 flex flex-col sm:flex-row text-white">

                <Box>
                    <Image src={"/passwordsDoneEasyWhite.png"} height={200} width={200} alt="Passwords Done Easy"></Image>
                    <p>A Beginner-Oriented Password Generator</p>
                </Box>

                <Box>
                    <Typography variant="h3" isBold>Open Source</Typography>
                    <Typography>The Source code behind the project is freely available on GitHub.</Typography>
                    <Typography>All the generation happens in your browser, nothing is sent anywhere.</Typography>
                    <Typography>If you see a problem anywhere, feel free to contribute.</Typography>
                    <Link href={"https://github.com/catsrieldreemurr/passwordsDoneEasy"} className="text-pink-400 hover:underline"><Typography isBold isSpacer>Check out our GitHub Repository</Typography></Link>
                
                </Box>
                
                <Box>
                    <Typography variant="h3" isBold>Keep your Accounts Secure</Typography>
                    <Typography>Having a strong password is Extremely important.</Typography>
                    <Typography>Human Passwords often have patterns and phrases that hackers can use to guess the password.</Typography>
                    <Typography isSpacer>Generated passwords do not have this weakness.</Typography>
                </Box>
            </div>
        </footer>
    )
}