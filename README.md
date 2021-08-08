# OfficeBoard

Web application for office communication - interactive web board for sharing important messages from managers and supervisors to their teams.

:dart:  My project for the Angular course at SoftUni. (August 2021) 

## :hammer_and_pick: Built With

- ASP.NET Core 5.0 for back-end.
- Angular for the client-side.

## :gear: Application Configurations

### 1. Server
- Check the connection string in Server's `appsettings.json`. If you don't use SQLEXPRESS, you should replace `Server=.\\SQLEXPRESS;` with `Server=.;`.
- Check the `UseUrls()` in Server's `Program.cs`. You may change the localhost port, if you need so.
- Run the OfficeBoard.Server App.

### 2. Client 
- Check the `apiUrl` in Client's `src\environments\environment.ts` - it should be the one on which the Server App is running. If you changed the port in the Server's `Program.cs`, you should change it here too.
- Go to the Client's `src\app` directory and run `ng serve` for a dev server. 
- Navigate to `http://localhost:4200/`.

## License

This project is licensed under the [GPL-2.0 License](LICENSE).

## Acknowledgments

#### Thanks to [Ivaylo Kenov](https://github.com/ivaylokenov) and [Ines Ivanova](https://github.com/InesIvanova) for the great video tutorials in the YouTube channel [Code It Up with Ivo](https://www.youtube.com/channel/UCP5Ons7fK3yKhX6lhc9XcfQ).
