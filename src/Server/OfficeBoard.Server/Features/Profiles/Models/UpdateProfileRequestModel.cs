namespace OfficeBoard.Server.Features.Profiles.Models
{
    using System.ComponentModel.DataAnnotations;

    using static OfficeBoard.Server.Data.Validation.User;

    public class UpdateProfileRequestModel
    {
        [MaxLength(MaxNameLength)]
        public string Name { get; set; }

        [MaxLength(MaxPositionLength)]
        public string Position { get; set; }

        [MaxLength(MaxDepartmentLength)]
        public string Department { get; set; }
    }
}
