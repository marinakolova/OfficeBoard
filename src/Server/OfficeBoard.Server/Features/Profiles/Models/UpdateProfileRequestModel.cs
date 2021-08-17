namespace OfficeBoard.Server.Features.Profiles.Models
{
    using System.ComponentModel.DataAnnotations;

    using static OfficeBoard.Server.Data.Validation.User;

    public class UpdateProfileRequestModel
    {
        [EmailAddress]
        public string Email { get; set; }

        public string UserName { get; set; }

        [MaxLength(MaxNameLength)]
        public string Name { get; set; }

        [MaxLength(MaxPositionLength)]
        public string Position { get; set; }

        [MaxLength(MaxDepartmentLength)]
        public string Department { get; set; }
    }
}
