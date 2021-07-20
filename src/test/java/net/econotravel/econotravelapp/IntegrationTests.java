package net.econotravel.econotravelapp;

import net.econotravel.econotravelapp.domain.Experience;
import net.econotravel.econotravelapp.repositories.ExperienceRepository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import java.math.BigDecimal;
import java.util.List;

import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
public class IntegrationTests {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    private ExperienceRepository fakeExperienceRepository;

    @Test
    public void returnsAllExperiences() throws Exception {
        loadFakeData();

        mockMvc.perform(get("/experiences"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*]", hasSize(2)))
                .andExpect(jsonPath("$[0].name", equalTo("Paseo en bicicleta por el Montseny")))
                .andExpect(jsonPath("$[0].pricePerPerson", equalTo(13.29)))
                .andExpect(jsonPath("$[1].name", equalTo("De la huerta a la cocina")))
                .andExpect(jsonPath("$[1].pricePerPerson", equalTo(7.20)));
    }

    private void loadFakeData() {
        List<Experience> experienceList = List.of(
                new Experience("Paseo en bicicleta por el Montseny", BigDecimal.valueOf(13.29)),
                new Experience("De la huerta a la cocina", BigDecimal.valueOf(7.20))
        );
        fakeExperienceRepository.saveAll(experienceList);
    }
}
