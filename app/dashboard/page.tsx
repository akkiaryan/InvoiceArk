
import { requireUser } from "../utils/hooks";
export default async function DashboardRoute(){
    const session = await requireUser();


    return (
        <div>
            <h1>hello from the dashboard route</h1>
        </div>
    );
}