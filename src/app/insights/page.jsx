
import { getSortedPostsData } from "@/utils/lib";
import { redirect } from "next/navigation";


export default function InsightsLanding() {
    const mostRecentPost = getSortedPostsData()[0];
    redirect(`/insights/${mostRecentPost.slug}`);
    return <></>;    
}