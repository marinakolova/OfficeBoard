# OfficeBoard

Web application for office communication - interactive web board for sharing important messages from managers and supervisors to their teams.

## :hammer_and_pick: Built With

- ASP.NET Core 5.0 for back-end.
- MS SQL Server Express for database system.
- Angular for the client-side.

## :gear: Application Configurations

### 1. Server
- The connection string is in `appsettings.json`. If you don't use SQLEXPRESS, you should replace `Server=.\\SQLEXPRESS;` with `Server=.;`.
- The app is set to use `https://localhost:44390`. If you need to change that, you may do it in the `UseUrls()` in `Program.cs`.
- Run the OfficeBoard.Server App. You should see SwaggerUI in your browser.

### 2. Client 
- The `apiUrl` in the file `Client/src/environments/environment.ts` should be the one on which the OfficeBoard.Server App is running.
- Run `npm install` in the `Client` directory.
- Run `ng serve` for a dev server. 
- Navigate to `http://localhost:4200/` and enjoy OfficeBoard's client-side.

## License

This project is licensed under the [GPL-2.0 License](LICENSE).

## Acknowledgments

#### Thanks to [Ivaylo Kenov](https://github.com/ivaylokenov) and [Ines Ivanova](https://github.com/InesIvanova) for the great video tutorials in the YouTube channel [Code It Up with Ivo](https://www.youtube.com/channel/UCP5Ons7fK3yKhX6lhc9XcfQ).
