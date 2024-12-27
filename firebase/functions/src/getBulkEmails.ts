import * as admin from "firebase-admin";
import { onCall } from "firebase-functions/v2/https";
import { Status } from "./Status";

export const getBulkEmails = onCall(async (request) => {
    const uid = request.auth?.uid;
    if (!uid) return { status: Status.unauthorized };

    let data = request.data;
    console.log(data);

    const uids: string[] = data.uids;
    if (!uids) return { status: Status.invalidRequest };

    try {
        const userRecords = await admin.auth().getUsers(uids.map((uid) => ({ uid })));
        const emails = userRecords.users.map((user) => ({
            uid: user.uid,
            email: user.email,
        }));

        return { status: Status.success, data: emails };
    } catch (error) {
        console.error(error);
        return { status: Status.internalError };
    }
});
