import type { OperationParameter } from './OperationParameter';

export interface OperationParameters {
    imports: string[];
    parameters: OperationParameter[];
    params: OperationParameter[];
    parametersPath: OperationParameter[];
    parametersQuery: OperationParameter[];
    parametersForm: OperationParameter[];
    parametersCookie: OperationParameter[];
    parametersHeader: OperationParameter[];
    parametersBody: OperationParameter | null;
}
