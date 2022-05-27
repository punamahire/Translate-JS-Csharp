using System;
using System.Collections.Generic;
using System.Linq;

namespace DinnerParty
{
    class Program
    {
        static void Main(string[] args)
        {
            List<Guest> guests = new List<Guest>();
            guests.Add(new Guest("Marilyn Monroe", "entertainer", "(1926 - 1962) American actress, singer, model"));
            guests.Add(new Guest("Abraham Lincoln", "politician", "(1809 - 1865) US President during American civil war")); 
            guests.Add(new Guest("Martin Luther King", "activist", "(1929 - 1968)  American civil rights campaigner"));
            guests.Add(new Guest("Rosa Parks", "activist", "(1913 - 2005)  American civil rights activist"));
            guests.Add(new Guest("Peter Sellers", "entertainer", "(1925 - 1980) British actor and comedian"));
            guests.Add(new Guest("Alan Turing", "computer scientist", "(1912 - 1954) - British computing pioneer, Turing machine, algorithms, cryptology, computer architecture, saved the world"));
            guests.Add(new Guest("Admiral Grace Hopper", "computer scientist", "(1906–1992) - developed early compilers: FLOW-Matic, COBOL; worked on UNIVAC; gave speeches on computer history, where she gave out nano-seconds"));
            guests.Add(new Guest("Indira Gandhi", "politician", "(1917 - 1984) Prime Minister of India 1966 - 1977"));

            List<Guest> tableList1 = new List<Guest>();
            List<Guest> tableList2 = new List<Guest>();

            foreach (var guest in guests)
            {
                IEnumerable<string> table1Occupations = tableList1.Select(g => g.Occupation);
                if (table1Occupations.Contains(guest.Occupation))
                {
                    tableList2.Add(guest);
                }
                else
                {
                    tableList1.Add(guest);
                }
            }

            Console.WriteLine("Table 1");
            foreach (var guest in tableList1)
            {
                Console.WriteLine($"{guest.Name} {guest.Occupation} {guest.Bio}");
            }

            Console.WriteLine("Table 2");
            foreach (var guest in tableList2)
            {
                Console.WriteLine($"{guest.Name} {guest.Occupation} {guest.Bio}");
            }
            
        }
    }

    public class Guest
    {
        public string Name { get; set; }
        public string Occupation { get; set; }
        public string Bio { get; set; }

        public Guest(string name, string occupation, string bio)
        {
            Name = name;
            Occupation = occupation;
            Bio = bio;
        }
    }
}
