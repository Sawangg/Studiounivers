import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    NotFoundException,
    Param,
    ParseIntPipe,
    Post,
    UploadedFiles,
    UseGuards,
    UseInterceptors,
} from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";
import { JwtAuthGuard } from "@auth/guards/JWTGuard";
import { CreateProductDto } from "@product/dtos/CreateProduct.dto";
import { UpdateProductDto } from "@product/dtos/UpdateProduct.dto";
import { ProductService } from "@product/services/product.service";

@Controller("product")
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get("/")
    async getProducts() {
        const data = await this.productService.findAll();
        if (!data || data.length === 0) throw new NotFoundException();
        return data;
    }

    @Get("/newest")
    async getNewestProducts() {
        const data = await this.productService.newest();
        if (!data || data.length === 0) throw new NotFoundException();
        return data;
    }

    @Get("/popular")
    async getPopularProducts() {
        const data = await this.productService.popular();
        if (!data || data.length === 0) throw new NotFoundException();
        return data;
    }

    @Get("/:productId")
    async getProduct(
        @Param("productId", new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) productId: number,
    ) {
        const data = await this.productService.find(productId);
        if (!data) throw new NotFoundException();
        return data;
    }

    @Get("/search/:query")
    searchProduct(@Param("query") query: string) {
        return this.productService.search(query);
    }

    @UseGuards(JwtAuthGuard)
    @UseInterceptors(FilesInterceptor("files"))
    @Post("create")
    createProduct(@Body() createProductDto: CreateProductDto, @UploadedFiles() files: Array<Express.Multer.File>) {
        if (!files || files.length === 0) throw new BadRequestException("No files found");
        return this.productService.create(createProductDto, files);
    }

    @UseGuards(JwtAuthGuard)
    @UseInterceptors(FilesInterceptor("files"))
    @Post("update/:productId")
    updateProduct(
        @Param("productId", new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) productId: number,
        @Body() updateProductDto: UpdateProductDto,
        @UploadedFiles() files?: Array<Express.Multer.File>,
    ) {
        return this.productService.update(productId, updateProductDto, files);
    }

    @Delete("/delete/:productId")
    deleteProduct(
        @Param("productId", new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) productId: number,
    ) {
        return this.productService.delete(productId);
    }
}
