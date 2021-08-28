# OfficeBoard

Web application for office communication: 
- Messages board for sharing important messages with team members. 
- Tasks board for keeping track of tasks which should be done inside the team.
- Comments option for the tasks.

## :hammer_and_pick: Built With

| Back-end  | Data access technology | Database system  | Client-side |
| :---: | :---: | :---: | :---: |
| ASP.NET Core 5.0  | Entity Framework (EF) Core 5.0  | MS SQL Server Express  | Angular  |

## :warning: Prerequisites
- [.NET 5.0 SDK](https://dotnet.microsoft.com/download/dotnet/5.0)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
- [Node.js](https://nodejs.org/en/)
- [Angular CLI](https://angular.io/cli)

## :gear: Configurations

### 1. Server
- If you don't use SQLEXPRESS, you should check the connection string in `appsettings.json` and replace `Server=.\\SQLEXPRESS;` with `Server=.;`.
- Run `dotnet run` in the OfficeBoard.Server App's directory. Seeding sample data would happen, including test accounts.
- You should see SwaggerUI in your browser on `https://localhost:44390`. 
- ( The server app is set to listen on `https://localhost:44390`. If you need to change that, you may do it inside `UseUrls()` in the `Program.cs` file, but note that the `apiUrl` in the file `Client/src/environments/environment.ts` should be the same. )

### 2. Client  
- The OfficeBoard.Server App should be running in order to use the Client.
- Run `npm install` in the `Client` directory.
- Run `ng serve --open` (in the `Client` directory) for a dev server. 
- You should see OfficeBoard's client-side open in your browser on `http://localhost:4200/`.

### Seeded test accounts:
  - Username: testuser / password: 123456
  - Username: anothertest / password: 123456

## :information_source: Structure
#### Public part (visible without authentication): 
- Dashboard - shows the count of messages, tasks and comments for the day, for the month and for the year;
- Login page - user login form;
- Register page - user registration form; 
#### Only for Logged Users:
- Profile
  - view and edit own profile info;
  - view other user's info;
- Messages
  - messages board - all messages with search bar;
  - create messages with title and content;
  - edit or delete own messages;
- Tasks
  - tasks board - all tasks in three columns - to do, doing and done;
  - change task's status by moving the task across the three columns;
  - create tasks with title and description; 
  - edit or delete own tasks;
  - view task's details with comments;
- Comments
  - shown in task's details page; 
  - create comments for existing tasks;
  - edit or delete own comments;

## :eyes: Screenshots
#### Dashboard
![OfficeBoard-MessagesBoard-Screenshot](https://raw.githubusercontent.com/marinakolova/OfficeBoard/main/screenshots/screencapture-dashboard.png)
#### Messages Board
![OfficeBoard-TasksBoard-Screenshot](https://raw.githubusercontent.com/marinakolova/OfficeBoard/main/screenshots/screencapture-messages.png)
#### Messages Create
![OfficeBoard-TasksBoard-Screenshot](https://raw.githubusercontent.com/marinakolova/OfficeBoard/main/screenshots/screencapture-messages-create.png)
#### Tasks Board
![OfficeBoard-TasksBoard-Screenshot](https://raw.githubusercontent.com/marinakolova/OfficeBoard/main/screenshots/screencapture-tasks.png)
#### Tasks Edit
![OfficeBoard-TasksBoard-Screenshot](https://raw.githubusercontent.com/marinakolova/OfficeBoard/main/screenshots/screencapture-tasks-edit.png)
#### Task Details With Comments
![OfficeBoard-TaskDetailsWithComments-Screenshot](https://raw.githubusercontent.com/marinakolova/OfficeBoard/main/screenshots/screencapture-tasks-details.png)
#### Task Comment Create
![OfficeBoard-TaskDetailsWithComments-Screenshot](https://raw.githubusercontent.com/marinakolova/OfficeBoard/main/screenshots/screencapture-tasks-comments-create.png)
#### Edit User Profile
![OfficeBoard-TaskDetailsWithComments-Screenshot](https://raw.githubusercontent.com/marinakolova/OfficeBoard/main/screenshots/screencapture-profile-edit.png)
#### 404
![OfficeBoard-TaskDetailsWithComments-Screenshot](https://raw.githubusercontent.com/marinakolova/OfficeBoard/main/screenshots/screencapture-404.png)

## License

This project is licensed under the [GPL-2.0 License](LICENSE).

## Acknowledgments

#### 1) Thanks to [Ivaylo Kenov](https://github.com/ivaylokenov) and [Ines Ivanova](https://github.com/InesIvanova) for the great video tutorials in the YouTube channel [Code It Up with Ivo](https://www.youtube.com/channel/UCP5Ons7fK3yKhX6lhc9XcfQ).

#### 2) Using code from [SB Admin 2](https://github.com/startbootstrap/startbootstrap-sb-admin-2) Template by [Start Bootstrap](https://github.com/StartBootstrap).
