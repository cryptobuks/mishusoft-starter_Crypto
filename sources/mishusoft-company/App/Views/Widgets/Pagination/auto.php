<!--will be upgrade for auto pagination-->
<?php if (property_exists($this, 'pagination') && $this->pagination !== null): ?>
    <table class="table">
        <tr>
            <td style="width:100px">
                <div class="text-align-left">
                    Pages <?php echo $this->pagination['current']; ?> of <?php echo $this->pagination['total']; ?>.
                </div>
            </td>
            <td>
                <div class="text-align-center">
                    <div class="pagination">
                        <!--left align symbols-->
                        <?php if ($this->pagination['first']): ?>
                            <a class="page" data-start="<?php echo $this->pagination['first']; ?>"
                               href="javascript:void(0)"><i class="fa fa-angle-double-left"></i></a>
                        <?php else: ?>
                            <a><i class="fa fa-angle-double-left"></i></a>
                        <?php endif; ?>
                        <?php if ($this->pagination['previous']): ?>
                            <a class="page" data-start="<?php echo $this->pagination['previous']; ?>"
                               href="javascript:void(0)"><i class="fa fa-chevron-left"></i></a>
                        <?php else: ?>
                            <a><i class="fa fa-chevron-left"></i></a>
                        <?php endif; ?>

                        <!--pagination-->
                        
$itemsCount = count($this->pagination['range']);<?php for ($i = 0; $i < $itemsCount; $i++): ?>
                            <?php if ($this->pagination['current'] === $this->pagination['range'][$i]): ?>
                                <a class="active"><?php echo $this->pagination['range'][$i]; ?></a>
                            <?php else: ?>
                                <a class="page" data-start="<?php echo $this->pagination['range'][$i]; ?>"
                                   href="javascript:void(0)" data-range="10"><?php echo $this->pagination['range'][$i]; ?></a>
                            <?php endif; ?>
                        <?php endfor; ?>

                        <!--right align symbols-->
                        <?php if ($this->pagination['next']): ?>
                            <a class="page" data-start="<?php echo $this->pagination['next']; ?>"
                               href="javascript:void(0)"><i class="fa fa-chevron-right"></i></a>
                        <?php else: ?>
                            <a><i class="fa fa-chevron-right"></i></a>
                        <?php endif; ?>

                        <?php if ($this->pagination['last']): ?>
                            <a class="page" data-start="<?php echo $this->pagination['last']; ?>"
                               href="javascript:void(0)"><i class="fa fa-angle-double-right"></i></a>
                        <?php else: ?>
                            <a><i class="fa fa-angle-double-right"></i></a>
                        <?php endif; ?>
                    </div>
                </div>
            </td>
        </tr>
    </table>
<?php endif; ?>

