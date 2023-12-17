package com.davs.backend.cartapp.backendcartapp.repositories;
import com.davs.backend.cartapp.backendcartapp.models.entities.Product;

import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Long>{
    
}
