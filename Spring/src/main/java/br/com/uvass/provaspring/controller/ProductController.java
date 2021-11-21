package br.com.uvass.provaspring.controller;
import br.com.uvass.provaspring.model.entity.Product;
import br.com.uvass.provaspring.repository.ProdutoRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping ("/produto")

public class ProductController {

    private ProdutoRepository ProdutoRepository;

    public ProductController(JdbcTemplate jdbcTemplate){
        ProdutoRepository = new ProdutoRepository(jdbcTemplate);
    }

    @GetMapping
    public List<Product> listarTodos(){
        return ProdutoRepository.listarTodos();
    }


}


