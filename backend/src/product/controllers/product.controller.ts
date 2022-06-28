import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";
import { CreateProductDto } from "../dtos/CreateProduct.dto";
import { ProductService } from "../services/product.service";

@Controller("product")
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get("/")
    async getProducts() {
        const data = await this.productService.findAll();
        if (!data || data.length === 0) throw new NotFoundException();
        return data;
    }

    @Get("/:productId")
    async getProduct(@Param("productId") productId: string) {
        const data = await this.productService.find(+productId);
        if (!data) throw new NotFoundException();
        return data;
    }

    @Get("/search/:query")
    searchProduct(@Param("query") query: string) {
        return this.productService.search(query);
    }

    // Auth guard here
    @UseInterceptors(FilesInterceptor("files"))
    @Post("create")
    createProduct(@Body() createProductDto: CreateProductDto, @UploadedFiles() files: Array<Express.Multer.File>) {
        if (!files || files.length === 0) throw new BadRequestException("No files found");
        return this.productService.create(createProductDto, files);
    }

    @Delete("/delete/:productId")
    deleteProduct(@Param("productId") productId: string) {
        return this.productService.delete(+productId);
    }
}
