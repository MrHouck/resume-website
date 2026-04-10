
import { getSortedPostsData } from "@/utils/lib";
import { redirect } from "next/navigation";


export default function MusingsLanding() {
    const mostRecentPost = getSortedPostsData()[0];
    console.log(getSortedPostsData());
    redirect(`/musings/${mostRecentPost.slug}`);
    return <></>;    
}