package br.com.uvass.provaspring.repository;

import br.com.uvass.provaspring.model.entity.Product;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ProdutoMapper implements RowMapper<Product> {

    @Override
    public Product mapRow(ResultSet resultSet, int i) throws SQLException {
        Product product = new Product();
        product.setId(resultSet.getInt("id"));
        product.setName(resultSet.getNString("name"));
        product.setImage(resultSet.getNString("image"));
        product.setOldPrice(resultSet.getFloat("old_price"));
        product.setPrice(resultSet.getFloat("price"));
        product.setDescription(resultSet.getNString("description"));
        return product;
    }
}
