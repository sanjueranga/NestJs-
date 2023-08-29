import {
    Controller,
    Body,
    Get,
    Param,
    Patch,
    Delete,
    UseGuards,
    Post,
    ParseIntPipe,
  } from '@nestjs/common';
  import { EditProductDto, ProductDto } from './dto';
  import { JwtGuard, RolesGuard } from '../auth/guard';
  import { ProductService } from './product.service';
  import { UserRole } from 'src/auth/guard/user-role.enum';
  import { Roles } from 'src/auth/decorator/roles.decorator';

  
  @Controller('products') // Change the route to 'products'
  export class ProductController {
    constructor(private productService: ProductService) {}
  
    @Post() // Change the route to match 'products'
    @UseGuards(JwtGuard)
   
    createProduct(@Body() dto: ProductDto) {
      return this.productService.createProduct(dto);
    }
  
    @Get()
    @Roles(UserRole.USER)
    @UseGuards(JwtGuard,RolesGuard)
    // Change the route to match 'products'
    getAllProducts() {
      return this.productService.getAllProducts();
    }
  
    @Get(':id') // Change the route to match 'products/:id'
    findProductById(@Param('id',ParseIntPipe) id: number) {
      return this.productService.findProductById(id);
    }
  
    @Patch(':id')
    @UseGuards(JwtGuard) // Change the route to match 'products/:id'
    editProduct(@Param('id', ParseIntPipe) id: number, @Body() dto:EditProductDto) {
      return this.productService.editProduct(id, dto);
    }
  
    @Delete(':id')
    @UseGuards(JwtGuard) // Change the route to match 'products/:id'
    deleteProduct(@Param('id',ParseIntPipe) id: number) {
      return this.productService.deleteProduct(id);
    }
  }
  