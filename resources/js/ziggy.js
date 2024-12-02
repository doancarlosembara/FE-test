const Ziggy = {
    url: "http://localhost",
    port: null,
    defaults: {},
    routes: {
        "debugbar.openhandler": {
            uri: "_debugbar/open",
            methods: ["GET", "HEAD"],
        },
        "debugbar.clockwork": {
            uri: "_debugbar/clockwork/{id}",
            methods: ["GET", "HEAD"],
            parameters: ["id"],
        },
        "debugbar.assets.css": {
            uri: "_debugbar/assets/stylesheets",
            methods: ["GET", "HEAD"],
        },
        "debugbar.assets.js": {
            uri: "_debugbar/assets/javascript",
            methods: ["GET", "HEAD"],
        },
        "debugbar.cache.delete": {
            uri: "_debugbar/cache/{key}/{tags?}",
            methods: ["DELETE"],
            parameters: ["key", "tags"],
        },
        "sanctum.csrf-cookie": {
            uri: "sanctum/csrf-cookie",
            methods: ["GET", "HEAD"],
        },
        "ignition.healthCheck": {
            uri: "_ignition/health-check",
            methods: ["GET", "HEAD"],
        },
        "ignition.executeSolution": {
            uri: "_ignition/execute-solution",
            methods: ["POST"],
        },
        "ignition.updateConfig": {
            uri: "_ignition/update-config",
            methods: ["POST"],
        },
        "employees.find": { uri: "employees/find", methods: ["GET", "HEAD"] },
        "employees.archived": {
            uri: "employees/archived",
            methods: ["GET", "HEAD"],
        },
        "employees.index": { uri: "employees", methods: ["GET", "HEAD"] },
        "employees.create": {
            uri: "employees/create",
            methods: ["GET", "HEAD"],
        },
        "employees.store": { uri: "employees", methods: ["POST"] },
        "employees.show": {
            uri: "employees/{employee}",
            methods: ["GET", "HEAD"],
            parameters: ["employee"],
        },
        "employees.edit": {
            uri: "employees/{employee}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["employee"],
        },
        "employees.update": {
            uri: "employees/{employee}",
            methods: ["PUT", "PATCH"],
            parameters: ["employee"],
        },
        "employees.destroy": {
            uri: "employees/{employee}",
            methods: ["DELETE"],
            parameters: ["employee"],
        },
        "branches.index": { uri: "branches", methods: ["GET", "HEAD"] },
        "branches.create": { uri: "branches/create", methods: ["GET", "HEAD"] },
        "branches.store": { uri: "branches", methods: ["POST"] },
        "branches.show": {
            uri: "branches/{branch}",
            methods: ["GET", "HEAD"],
            parameters: ["branch"],
        },
        "branches.edit": {
            uri: "branches/{branch}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["branch"],
        },
        "branches.update": {
            uri: "branches/{branch}",
            methods: ["PUT", "PATCH"],
            parameters: ["branch"],
        },
        "branches.destroy": {
            uri: "branches/{branch}",
            methods: ["DELETE"],
            parameters: ["branch"],
        },
        "departments.index": { uri: "departments", methods: ["GET", "HEAD"] },
        "departments.create": {
            uri: "departments/create",
            methods: ["GET", "HEAD"],
        },
        "departments.store": { uri: "departments", methods: ["POST"] },
        "departments.show": {
            uri: "departments/{department}",
            methods: ["GET", "HEAD"],
            parameters: ["department"],
        },
        "departments.edit": {
            uri: "departments/{department}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["department"],
        },
        "departments.update": {
            uri: "departments/{department}",
            methods: ["PUT", "PATCH"],
            parameters: ["department"],
        },
        "departments.destroy": {
            uri: "departments/{department}",
            methods: ["DELETE"],
            parameters: ["department"],
        },
        "positions.index": { uri: "positions", methods: ["GET", "HEAD"] },
        "positions.create": {
            uri: "positions/create",
            methods: ["GET", "HEAD"],
        },
        "positions.store": { uri: "positions", methods: ["POST"] },
        "positions.show": {
            uri: "positions/{position}",
            methods: ["GET", "HEAD"],
            parameters: ["position"],
        },
        "positions.edit": {
            uri: "positions/{position}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["position"],
        },
        "positions.update": {
            uri: "positions/{position}",
            methods: ["PUT", "PATCH"],
            parameters: ["position"],
        },
        "positions.destroy": {
            uri: "positions/{position}",
            methods: ["DELETE"],
            parameters: ["position"],
        },
        "shifts.index": { uri: "shifts", methods: ["GET", "HEAD"] },
        "shifts.create": { uri: "shifts/create", methods: ["GET", "HEAD"] },
        "shifts.store": { uri: "shifts", methods: ["POST"] },
        "shifts.show": {
            uri: "shifts/{shift}",
            methods: ["GET", "HEAD"],
            parameters: ["shift"],
        },
        "shifts.edit": {
            uri: "shifts/{shift}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["shift"],
        },
        "shifts.update": {
            uri: "shifts/{shift}",
            methods: ["PUT", "PATCH"],
            parameters: ["shift"],
        },
        "shifts.destroy": {
            uri: "shifts/{shift}",
            methods: ["DELETE"],
            parameters: ["shift"],
        },
        "metrics.index": { uri: "metrics", methods: ["GET", "HEAD"] },
        "metrics.create": { uri: "metrics/create", methods: ["GET", "HEAD"] },
        "metrics.store": { uri: "metrics", methods: ["POST"] },
        "metrics.show": {
            uri: "metrics/{metric}",
            methods: ["GET", "HEAD"],
            parameters: ["metric"],
        },
        "metrics.edit": {
            uri: "metrics/{metric}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["metric"],
        },
        "metrics.update": {
            uri: "metrics/{metric}",
            methods: ["PUT", "PATCH"],
            parameters: ["metric"],
        },
        "metrics.destroy": {
            uri: "metrics/{metric}",
            methods: ["DELETE"],
            parameters: ["metric"],
        },
        "requests.index": { uri: "requests", methods: ["GET", "HEAD"] },
        "requests.create": { uri: "requests/create", methods: ["GET", "HEAD"] },
        "requests.store": { uri: "requests", methods: ["POST"] },
        "requests.show": {
            uri: "requests/{request}",
            methods: ["GET", "HEAD"],
            parameters: ["request"],
        },
        "requests.edit": {
            uri: "requests/{request}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["request"],
        },
        "requests.update": {
            uri: "requests/{request}",
            methods: ["PUT", "PATCH"],
            parameters: ["request"],
        },
        "requests.destroy": {
            uri: "requests/{request}",
            methods: ["DELETE"],
            parameters: ["request"],
        },
        "payrolls.updateStatus": {
            uri: "payrolls/{id}/updateStatus",
            methods: ["PUT"],
            parameters: ["id"],
        },
        "payrolls.index": { uri: "payrolls", methods: ["GET", "HEAD"] },
        "payrolls.create": { uri: "payrolls/create", methods: ["GET", "HEAD"] },
        "payrolls.store": { uri: "payrolls", methods: ["POST"] },
        "payrolls.show": {
            uri: "payrolls/{payroll}",
            methods: ["GET", "HEAD"],
            parameters: ["payroll"],
        },
        "payrolls.edit": {
            uri: "payrolls/{payroll}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["payroll"],
        },
        "payrolls.update": {
            uri: "payrolls/{payroll}",
            methods: ["PUT", "PATCH"],
            parameters: ["payroll"],
        },
        "payrolls.destroy": {
            uri: "payrolls/{payroll}",
            methods: ["DELETE"],
            parameters: ["payroll"],
        },
        "attendance.show": {
            uri: "attendance/{date}",
            methods: ["GET", "HEAD"],
            parameters: ["date"],
        },
        "attendance.destroy": { uri: "attendance", methods: ["DELETE"] },
        "attendances.index": { uri: "attendances", methods: ["GET", "HEAD"] },
        "attendances.create": {
            uri: "attendances/create",
            methods: ["GET", "HEAD"],
        },
        "attendances.store": { uri: "attendances", methods: ["POST"] },
        "attendances.show": {
            uri: "attendances/{attendance}",
            methods: ["GET", "HEAD"],
            parameters: ["attendance"],
        },
        "attendances.edit": {
            uri: "attendances/{attendance}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["attendance"],
        },
        "attendances.update": {
            uri: "attendances/{attendance}",
            methods: ["PUT", "PATCH"],
            parameters: ["attendance"],
        },
        "attendances.destroy": {
            uri: "attendances/{attendance}",
            methods: ["DELETE"],
            parameters: ["attendance"],
        },
        "globals.index": { uri: "globals", methods: ["GET", "HEAD"] },
        "globals.edit": { uri: "globals/edit", methods: ["GET", "HEAD"] },
        "globals.update": { uri: "globals/edit", methods: ["PUT"] },
        "logs.index": { uri: "logs", methods: ["GET", "HEAD"] },
        "calendar.index": { uri: "calendar", methods: ["GET", "HEAD"] },
        "calendars.index": { uri: "calendars", methods: ["GET", "HEAD"] },
        "calendars.create": {
            uri: "calendars/create",
            methods: ["GET", "HEAD"],
        },
        "calendars.store": { uri: "calendars", methods: ["POST"] },
        "calendars.show": {
            uri: "calendars/{calendar}",
            methods: ["GET", "HEAD"],
            parameters: ["calendar"],
        },
        "calendars.edit": {
            uri: "calendars/{calendar}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["calendar"],
        },
        "calendars.update": {
            uri: "calendars/{calendar}",
            methods: ["PUT", "PATCH"],
            parameters: ["calendar"],
        },
        "calendars.destroy": {
            uri: "calendars/{calendar}",
            methods: ["DELETE"],
            parameters: ["calendar"],
        },
        "profile.edit": { uri: "profile", methods: ["GET", "HEAD"] },
        "profile.update": { uri: "profile", methods: ["PATCH"] },
        "dashboard.index": { uri: "dashboard", methods: ["GET", "HEAD"] },
        "my-profile": { uri: "my-profile", methods: ["GET", "HEAD"] },
        "attendance.dashboard": {
            uri: "my-attendance",
            methods: ["GET", "HEAD"],
        },
        "attendance.dashboardSignIn": {
            uri: "attendance/signin",
            methods: ["POST"],
        },
        "attendance.dashboardSignOff": {
            uri: "attendance/signoff",
            methods: ["POST"],
        },
        language: {
            uri: "language/{language}",
            methods: ["GET", "HEAD"],
            parameters: ["language"],
        },
        register: { uri: "register", methods: ["GET", "HEAD"] },
        login: { uri: "login", methods: ["GET", "HEAD"] },
        "password.request": {
            uri: "forgot-password",
            methods: ["GET", "HEAD"],
        },
        "password.email": { uri: "forgot-password", methods: ["POST"] },
        "password.reset": {
            uri: "reset-password/{token}",
            methods: ["GET", "HEAD"],
            parameters: ["token"],
        },
        "password.store": { uri: "reset-password", methods: ["POST"] },
        "verification.notice": {
            uri: "verify-email",
            methods: ["GET", "HEAD"],
        },
        "verification.verify": {
            uri: "verify-email/{id}/{hash}",
            methods: ["GET", "HEAD"],
            parameters: ["id", "hash"],
        },
        "verification.send": {
            uri: "email/verification-notification",
            methods: ["POST"],
        },
        "password.confirm": {
            uri: "confirm-password",
            methods: ["GET", "HEAD"],
        },
        "password.update": { uri: "password", methods: ["PUT"] },
        logout: { uri: "logout", methods: ["POST"] },
    },
};
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
