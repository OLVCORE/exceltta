import { UploadService } from './upload.service';
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    uploadDocumento(body: {
        empresaId: string;
        arquivoUrl: string;
        tipo: string;
    }): Promise<any>;
}
