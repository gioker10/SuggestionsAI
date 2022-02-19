package games;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GamesResource {

    @GetMapping("/games")
    public String index() {
        return "Greetings from Spring Boot!";
    }
}
