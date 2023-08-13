using Microsoft.AspNetCore.Mvc;
using Test.Models;

namespace Test.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PersonController : ControllerBase
    {

        private readonly ILogger<PersonController> _person;

        public PersonController(ILogger<PersonController> Person)
        {
            _person = Person;
        }

        [HttpGet]
        public IEnumerable<Person> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new Person
            {
                Id = new Random().Next(1, 100),
                Name = "Anton",
                Surname = "Levchenko",
                Profession = "Marketing Specialist",
                Salary = 85000
            })
            .ToArray();
        }
    }
}