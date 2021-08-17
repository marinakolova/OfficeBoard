namespace OfficeBoard.Server.Data.Models
{
    using System.ComponentModel.DataAnnotations;

    using static OfficeBoard.Server.Data.Validation.User;

    public class Profile
    {
        [Key]
        [Required]
        public string UserId { get; set; }

        [MaxLength(MaxNameLength)]
        public string Name { get; set; }

        [MaxLength(MaxPositionLength)]
        public string Position { get; set; }

        [MaxLength(MaxDepartmentLength)]
        public string Department { get; set; }
    }
}
