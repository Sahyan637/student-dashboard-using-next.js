export interface Student {
    id: number;
    name: string;
    email: string;
    department: string;
    semester: number;
    status: "Active" | "Inactive";
    attendance: number;
}