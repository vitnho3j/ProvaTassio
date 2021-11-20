package br.com.uvass.provaspring.repository;

import org.springframework.jdbc.core.JdbcTemplate;


import br.com.uvass.provaspring.model.entity.Product;

import java.util.List;

public class ProdutoRepository {
    private JdbcTemplate jdbcTemplate;

    public ProdutoRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Product> listarTodos(){
        return jdbcTemplate.query("select * from product", new ProdutoMapper());
    }

}
