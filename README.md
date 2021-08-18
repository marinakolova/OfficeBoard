# OfficeBoard

Web application for office communication: 
- messages board for sharing important messages with team members; 
- tasks board for keeping track of tasks which should be done inside the team.

## :hammer_and_pick: Built With

| Back-end  | Data access technology | Database system  | Client-side |
| :---: | :---: | :---: | :---: |
| ASP.NET Core 5.0  | Entity Framework (EF) Core 5.0  | MS SQL Server Express  | Angular  |

## :warning: Prerequisites
- [.NET 5.0 SDK](https://dotnet.microsoft.com/download/visual-studio-sdks)
- [Visual Studio](https://visualstudio.microsoft.com/vs/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
- [Node.js](https://nodejs.org/en/)
- [Angular CLI](https://angular.io/cli)

## :gear: Configurations

### 1. Server
- Check the connection string in `Server/OfficeBoard.Server/appsettings.json`. If you don't use SQLEXPRESS, you should replace `Server=.\\SQLEXPRESS;` with `Server=.;`.
- The server app is set to use `https://localhost:44390`. If you need to change that, you may do it inside `UseUrls()` in the `Program.cs` file, but note that the `apiUrl` in the file `Client/src/environments/environment.ts` should be the same.
- Run the OfficeBoard.Server App. One way to do it is by opening `OfficeBoard.Server.sln` with [Visual Studio](https://visualstudio.microsoft.com/vs/) and pressing `Ctrl+F5`. Seeding sample data would happen, including test accounts.
- You should see SwaggerUI in your browser. 

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
- Dashboard page - shows the count of messages, tasks and comments for the day, for the month and for the year;  
- Login page - user login form;
- Register page - user registration form;  
#### Only for Logged Users:
- Profile
  - view and edit own profile info;
  - view other user's info;
- Messages
  - messages board - all messages;
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

## :eyes: Screenshot of the Tasks Board:
![OfficeBoard-TasksBoard-Screenshot](https://raw.githubusercontent.com/marinakolova/OfficeBoard/main/screencapture-tasks-board.png)

## License

This project is licensed under the [GPL-2.0 License](LICENSE).

## Acknowledgments

#### 1) Thanks to [Ivaylo Kenov](https://github.com/ivaylokenov) and [Ines Ivanova](https://github.com/InesIvanova) for the great video tutorials in the YouTube channel [Code It Up with Ivo](https://www.youtube.com/channel/UCP5Ons7fK3yKhX6lhc9XcfQ).

#### 2) Using code from [SB Admin 2](https://github.com/startbootstrap/startbootstrap-sb-admin-2) Template by [Start Bootstrap](https://github.com/StartBootstrap).
