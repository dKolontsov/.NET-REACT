using System.ComponentModel.DataAnnotations;

namespace Test.Models
{
    public class Person
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string? Name { get; set; }

        public string? Surname { get; set; }

        public string? Profession { get; set; }

        public int? Salary { get; set; }
    }
}