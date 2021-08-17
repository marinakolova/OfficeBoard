namespace OfficeBoard.Server.Data
{
    public class Validation
    {
        public class Message
        {
            public const int MaxTtileLength = 60;
            public const int MaxContentLength = 3500;
        }

        public class Task
        {
            public const int MaxTtileLength = 60;
            public const int MaxDescriptionLength = 3500;
        }

        public class Comment
        {
            public const int MaxContentLength = 3500;
        }

        public class User
        {
            public const int MaxNameLength = 40;
            public const int MaxPositionLength = 40;
            public const int MaxDepartmentLength = 40;
        }
    }
}
